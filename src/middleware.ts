import * as jose from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get("directus_session_token")?.value;

  if (cookie === undefined) {
    return NextResponse.redirect(new URL("/", request.url));
  } else {
    try {
      let token = jose.decodeJwt(cookie);

      if (token.iss !== "directus") {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      const customResponse = NextResponse.redirect(
        new URL("/", request.nextUrl),
      );

      customResponse.cookies.delete("directus_session_token");

      return customResponse;
    }
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/profile/:path*",
};
