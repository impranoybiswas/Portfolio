"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return null;
}
