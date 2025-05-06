import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCookie } from './utils/cookies';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define protected routes that require authentication
  const protectedRoutes = ['/profile', '/admin', '/admin/dashboard', '/admin/blogs'];

  // Check if the path is a protected route
  const isProtectedRoute = protectedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`)
  );

  // Get the authentication token from cookies
  const token = request.cookies.get('firebase_token')?.value;

  // If trying to access a protected route without a token, we'll show the login modal
  // instead of redirecting to the auth page
  // if (isProtectedRoute && !token) {
  //   const url = new URL('/auth', request.url);
  //   url.searchParams.set('callbackUrl', encodeURI(request.url));
  //   return NextResponse.redirect(url);
  // }

  // Disable redirect for auth pages since we're using modals now
  // if ((path === '/auth' || path.startsWith('/auth/')) && token) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  // Continue with the request
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
