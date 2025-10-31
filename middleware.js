import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const isAdminPath = pathname.startsWith('/admin');
    const isAdminApi = pathname.startsWith('/api/admin');
    const isLogin = pathname.startsWith('/admin/login');
  const isAuthApi = pathname.startsWith('/api/admin/login') || pathname.startsWith('/api/admin/logout');

  if (!(isAdminPath || isAdminApi)) return NextResponse.next();
  if (isLogin || isAuthApi) return NextResponse.next();

  const session = request.cookies.get('admin_session')?.value;
  if (session === '1') {
        return NextResponse.next();
    }

    if (isAdminApi) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ['/admin/:path*', '/api/admin/:path*']
};

