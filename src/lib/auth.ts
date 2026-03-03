import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin_session";
const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

function makeToken(): string {
  const expires = Date.now() + TOKEN_EXPIRY_MS;
  const payload = `admin:${expires}`;
  const secret = process.env.ADMIN_PASSWORD || "";
  const hmac = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}:${hmac}`;
}

function verifyToken(token: string): boolean {
  const parts = token.split(":");
  if (parts.length !== 3) return false;
  const [, expiresStr, signature] = parts;
  const expires = parseInt(expiresStr, 10);
  if (Date.now() > expires) return false;
  const payload = `admin:${expiresStr}`;
  const secret = process.env.ADMIN_PASSWORD || "";
  const expected = crypto.createHmac("sha256", secret).update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export async function setAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, makeToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: TOKEN_EXPIRY_MS / 1000,
    path: "/",
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
