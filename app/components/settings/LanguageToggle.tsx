"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "../../i18n/routing";
import { useTransition } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (nextLocale: string) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("bn")}
        disabled={isPending}
        className={`flex items-center justify-between px-4 py-2 rounded-lg border transition text-sm cursor-pointer ${
          locale === "bn"
            ? "border-primary/50 bg-primary/10 shadow shadow-primary/10"
            : "border-primary/20 hover:bg-base-100/60 text-foreground/30"
        }`}
      >
        বাংলা
      </button>

      <button
        onClick={() => changeLanguage("en")}
        disabled={isPending}
        className={`flex items-center justify-between px-4 py-2 rounded-lg border transition text-sm cursor-pointer ${
          locale === "en"
            ? "border-primary/50 bg-primary/10 shadow shadow-primary/10"
            : "border-primary/20 hover:bg-base-100/60 text-foreground/30"
        }`}
      >
        English
      </button>
    </div>
  );
}
