import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//I am going to set up a public route (home) and a protected route (posts)
//We need to give the matcher a match for protected routes
//we need to write the match in regex
//you can add as many matches in [] as you want
const isProtectedRoute = createRouteMatcher(["/posts(.*)"]);

//we are going to use clerkmiddleware to put together the matches and the matcher
//if the protected route match is in the the request, protect with authentication
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  //the matcher will find matches for public and private routes
  //if the match is for a public route, middleware does not trigger
  //if the match is for a private route, middleware will trigger with authentication
  //the matcher uses regex to find matches
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
