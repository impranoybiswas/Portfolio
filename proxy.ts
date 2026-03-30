import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  routing.locales.reduce(
    (acc, locale) =>
      acc.startsWith(`/${locale}/`)
        ? acc.slice(`/${locale}`.length)
        : acc === `/${locale}`
          ? "/"
          : acc,
    pathname,
  );

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
