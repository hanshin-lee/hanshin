import fs from "fs";
import path from "path";

export interface Spot {
  id: string;
  name: string;
  type: string;
  neighborhood: string;
  description: string;
  rating: number; // 1-3
}

const DATA_PATH = path.join(process.cwd(), "data", "seoul-spots.json");

export function getSpots(): Spot[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

export function saveSpots(spots: Spot[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(spots, null, 2) + "\n");
}
