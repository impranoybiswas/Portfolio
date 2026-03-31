import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "bn"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number]; // 'en' | 'bn'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
