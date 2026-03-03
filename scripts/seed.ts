import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { join } from "path";

interface Spot {
  id: string;
  name: string;
  type: string;
  neighborhood: string;
  description: string;
  rating: number;
}

async function seed() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL is not set. Run: vercel env pull .env.local");
    process.exit(1);
  }

  const sql = neon(databaseUrl);

  console.log("Creating spots table...");
  await sql`
    CREATE TABLE IF NOT EXISTS spots (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      neighborhood TEXT NOT NULL,
      description TEXT NOT NULL,
      rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 3)
    )
  `;

  const dataPath = join(process.cwd(), "data", "seoul-spots.json");
  const spots: Spot[] = JSON.parse(readFileSync(dataPath, "utf-8"));

  console.log(`Seeding ${spots.length} spots...`);
  for (const spot of spots) {
    await sql`
      INSERT INTO spots (id, name, type, neighborhood, description, rating)
      VALUES (${spot.id}, ${spot.name}, ${spot.type}, ${spot.neighborhood}, ${spot.description}, ${spot.rating})
      ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        type = EXCLUDED.type,
        neighborhood = EXCLUDED.neighborhood,
        description = EXCLUDED.description,
        rating = EXCLUDED.rating
    `;
    console.log(`  ✓ ${spot.name}`);
  }

  console.log("Done!");
}

seed().catch(console.error);
