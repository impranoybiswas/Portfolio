"use client";

import { useEffect, useState } from "react";

export default function TimeGreeting() {
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    };

    updateGreeting();

    // keep it accurate if page stays open
    const interval = setInterval(updateGreeting, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="tracking-wide text-white text-2xl md:text-3xl font-semibold text-center md:text-left">
      Hi There! <br className="block md:hidden"/> {greeting}
    </h1>
  );
}
