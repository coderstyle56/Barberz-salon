export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/api/book/:path*"   // protect booking API
  ],
};

