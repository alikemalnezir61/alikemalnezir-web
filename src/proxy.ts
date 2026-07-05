import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { constantTimeEqual } from "./lib/constant-time-equal";

const intlMiddleware = createMiddleware(routing);

async function isAuthorized(request: NextRequest): Promise<boolean> {
  const user = process.env.ADMIN_BASIC_AUTH_USER;
  const password = process.env.ADMIN_BASIC_AUTH_PASSWORD;

  if (!user || !password) return false;

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return false;

  const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf-8");
  const separatorIndex = decoded.indexOf(":");
  const reqUser = decoded.slice(0, separatorIndex);
  const reqPassword = decoded.slice(separatorIndex + 1);

  const [userMatch, passwordMatch] = await Promise.all([
    constantTimeEqual(reqUser, user),
    constantTimeEqual(reqPassword, password),
  ]);

  return userMatch && passwordMatch;
}

function unauthorizedResponse() {
  return new NextResponse("Yetkisiz erişim", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin Panel"' },
  });
}

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return (await isAuthorized(request))
      ? NextResponse.next()
      : unauthorizedResponse();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|admin|_next|_vercel|.*\\..*).*)", "/admin", "/admin/:path*"],
};
