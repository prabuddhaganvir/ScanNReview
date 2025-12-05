import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Always run for API routes and dashboard
    "/dashboard/:path*",  // 🔥 Protect dashboard
    "/onboarding/:path*", // 🔥 Protect onboarding
    "/api/:path*",         // 🔥 Protect all API routes
  ],
}