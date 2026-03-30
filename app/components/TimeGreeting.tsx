"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function TimeGreeting() {
  const [greeting, setGreeting] = useState("Welcome");
  const t = useTranslations("header.greeting");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting(t("morning"));
      } else if (hour >= 12 && hour < 17) {
        setGreeting(t("afternoon"));
      } else if (hour >= 17 && hour < 21) {
        setGreeting(t("evening"));
      } else {
        setGreeting(t("night"));
      }
    };

    updateGreeting();

    // keep it accurate if page stays open
    const interval = setInterval(updateGreeting, 60 * 1000);
    return () => clearInterval(interval);
  }, [t]);

  return (
    <h1 className="tracking-wide text-foreground text-2xl md:text-3xl font-semibold text-center md:text-left">
      {t("hi")} <br className="block md:hidden"/> {greeting}
    </h1>
  );
}
