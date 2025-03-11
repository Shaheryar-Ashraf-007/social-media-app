import { clerkMiddleware } from '@clerk/nextjs/server';

// This example protects all routes including api/trpc routes
// except those specified in publicRoutes
export default clerkMiddleware({
  // Define your public routes here
  publicRoutes: [
    '/',
    '/sign-in',
    '/sign-up',
    '/api/posts',
    '/api/public',
    // Add other public routes as needed
  ],
  
  // Optional: Define routes that ignore authentication entirely
  // ignoredRoutes: ['/api/webhook/clerk'],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",  // Skip all static files
    "/",                            // Match root
    "/(api|trpc)(.*)",              // Match API and TRPC routes
  ],
};