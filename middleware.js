import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// protected routes
const protectedRoutes = ["/"];

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // check if the request is for an exact protected route or its direct sub-route
  const isProtectedRoute = protectedRoutes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  // Skip protection if route is not protected
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // extract the session cookie
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  // console.log("Session Cookie:", sessionCookie);

  // redirect to login if no session or if the session is expired
  if (!sessionCookie) {
    // console.warn("No session found, redirecting to login.");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // parse the session to check expiration
  try {
    const parsedSession = JSON.parse(sessionCookie.value);
    const isSessionValid =
      parsedSession?.expiresAt &&
      parsedSession.expiresAt > new Date().getTime();

    if (!isSessionValid) {
      // console.warn("Session expired, redirecting to login.");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    // console.error("Error parsing session:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // continue to the requested page if session is valid
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico|login).*)",
};
