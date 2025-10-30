export function verifyAdminRequest(request) {
  // Support both NextRequest (has request.cookies.get) and standard Request
  // (inspect headers) so route handlers and middleware both work reliably.
  let session;
  try {
    if (request?.cookies?.get) {
      session = request.cookies.get('admin_session')?.value;
    } else if (request?.headers?.get) {
      const cookieHeader = request.headers.get('cookie') || '';
      const parts = cookieHeader.split(';').map((c) => c.trim());
      const match = parts.find((c) => c.startsWith('admin_session='));
      if (match) session = match.split('=')[1];
    }
  } catch (e) {
    // swallow and treat as unauthenticated
  }
  return session === '1';
}


