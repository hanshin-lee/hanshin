import { NextRequest, NextResponse } from "next/server";
import { updateSpot, deleteSpot } from "@/lib/seoul";
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
  const { name, type, neighborhood, description, rating } = body;

  if (rating !== undefined && (rating < 1 || rating > 3)) {
    return NextResponse.json({ error: "Rating must be 1-3" }, { status: 400 });
  }

  const updated = await updateSpot(id, { name, type, neighborhood, description, rating });
  if (!updated) {
    return NextResponse.json({ error: "Spot not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  await deleteSpot(id);
  return NextResponse.json({ success: true });
}
