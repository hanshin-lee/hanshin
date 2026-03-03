import { NextRequest, NextResponse } from "next/server";
import { getSpots, saveSpots, type Spot } from "@/lib/seoul";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const spots = getSpots();
  return NextResponse.json(spots);
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { name, type, neighborhood, description, rating } = body;

  if (!name || !type || !neighborhood || !description || !rating) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  if (rating < 1 || rating > 3) {
    return NextResponse.json({ error: "Rating must be 1-3" }, { status: 400 });
  }

  const spots = getSpots();
  const newSpot: Spot = {
    id: name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") + "-" + Date.now(),
    name,
    type,
    neighborhood,
    description,
    rating,
  };

  spots.push(newSpot);
  saveSpots(spots);
  return NextResponse.json(newSpot, { status: 201 });
}
