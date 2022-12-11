import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.headers.get("authorization") !== process.env.API_KEY) {
    return NextResponse.json({
      success: false,
      message: "Sorry, you are not authorized.",
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:function*",
};
