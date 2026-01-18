"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

/**
 * LenisProvider Component
 * 
 * Initializes and manages the Lenis smooth scrolling instance.
 * Wraps the application to provide smooth scroll behavior.
 * 
 * @param {ReactNode} children - Child components to be wrapped
 * @returns {JSX.Element} Provider component
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smoothTouch: true, // Deprecated in v1? usually not needed or 'smooth: true'
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
