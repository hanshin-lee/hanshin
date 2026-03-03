import { NextRequest, NextResponse } from "next/server";
import { setAuthCookie, clearAuthCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { password } = body;

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  await setAuthCookie();
  return NextResponse.json({ success: true });
}

export async function DELETE() {
  await clearAuthCookie();
  return NextResponse.json({ success: true });
}
