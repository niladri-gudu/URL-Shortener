import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)", "/logout(.*)"], 
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], 
};
