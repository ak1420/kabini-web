import { NextResponse } from 'next/server';

// Read admin credentials from environment when available. Fallback to the
// previous hard-coded defaults to keep local dev simple.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin.blog@kabini.ai';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'kabini@2026';

export async function POST(request) {
  const { email, password } = await request.json();
  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_session', '1', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  });
  return res;
}


