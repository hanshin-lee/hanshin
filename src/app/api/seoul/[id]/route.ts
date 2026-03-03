import { NextRequest, NextResponse } from "next/server";
import { getSpots, saveSpots } from "@/lib/seoul";
import { isAuthenticated } from "@/lib/auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const spots = getSpots();
  const index = spots.findIndex((s) => s.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Spot not found" }, { status: 404 });
  }

  const { name, type, neighborhood, description, rating } = body;
  if (rating !== undefined && (rating < 1 || rating > 3)) {
    return NextResponse.json({ error: "Rating must be 1-3" }, { status: 400 });
  }

  spots[index] = {
    ...spots[index],
    ...(name && { name }),
    ...(type && { type }),
    ...(neighborhood && { neighborhood }),
    ...(description && { description }),
    ...(rating && { rating }),
  };

  saveSpots(spots);
  return NextResponse.json(spots[index]);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const spots = getSpots();
  const index = spots.findIndex((s) => s.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Spot not found" }, { status: 404 });
  }

  spots.splice(index, 1);
  saveSpots(spots);
  return NextResponse.json({ success: true });
}
