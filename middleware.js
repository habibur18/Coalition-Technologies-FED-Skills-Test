import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Define protected paths you want to secure
const protectedRoutes = ["/"]; // Add other protected routes as needed

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Check if the request is for an exact protected route or its direct sub-route
  const isProtectedRoute = protectedRoutes.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  // Skip protection if route is not protected
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Get the session cookie
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session");

  // Log the session cookie for debugging
  // console.log("Session Cookie:", sessionCookie);

  // Redirect to login if no session or if the session is expired
  if (!sessionCookie) {
    console.warn("No session found, redirecting to login.");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Parse the session to check expiration
  try {
    const parsedSession = JSON.parse(sessionCookie.value);
    const isSessionValid =
      parsedSession?.expiresAt &&
      parsedSession.expiresAt > new Date().getTime();

    if (!isSessionValid) {
      console.warn("Session expired, redirecting to login.");
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    console.error("Error parsing session:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Continue to the requested page if session is valid
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico|login).*)", // Apply middleware to all pages except specified paths
};
