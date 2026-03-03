import { neon } from "@neondatabase/serverless";

export interface Spot {
  id: string;
  name: string;
  type: string;
  neighborhood: string;
  description: string;
  rating: number; // 1-3
}

function getSQL() {
  return neon(process.env.DATABASE_URL!);
}

export async function initTable(): Promise<void> {
  const sql = getSQL();
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
}

export async function getSpots(): Promise<Spot[]> {
  const sql = getSQL();
  const rows = await sql`SELECT * FROM spots ORDER BY name`;
  return rows as Spot[];
}

export async function getSpot(id: string): Promise<Spot | null> {
  const sql = getSQL();
  const rows = await sql`SELECT * FROM spots WHERE id = ${id}`;
  return (rows[0] as Spot) ?? null;
}

export async function addSpot(spot: Spot): Promise<Spot> {
  const sql = getSQL();
  await sql`
    INSERT INTO spots (id, name, type, neighborhood, description, rating)
    VALUES (${spot.id}, ${spot.name}, ${spot.type}, ${spot.neighborhood}, ${spot.description}, ${spot.rating})
  `;
  return spot;
}

export async function updateSpot(
  id: string,
  data: Partial<Omit<Spot, "id">>
): Promise<Spot | null> {
  const existing = await getSpot(id);
  if (!existing) return null;

  const updated = { ...existing, ...data };
  const sql = getSQL();
  await sql`
    UPDATE spots
    SET name = ${updated.name},
        type = ${updated.type},
        neighborhood = ${updated.neighborhood},
        description = ${updated.description},
        rating = ${updated.rating}
    WHERE id = ${id}
  `;
  return updated;
}

export async function deleteSpot(id: string): Promise<boolean> {
  const sql = getSQL();
  const result = await sql`DELETE FROM spots WHERE id = ${id}`;
  return result.length !== undefined;
}
