"use client";
import { useState, useEffect } from "react";

/**
 * GridBackground Component
 * 
 * Renders a fixed background with a grid pattern that moves slightly based on mouse position
 * to create a parallax effect. Also features a continuous scrolling animation.
 * 
 * @returns {JSX.Element} The animated grid background
 */
export default function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-screen opacity-60 z-1 overflow-hidden transition-transform duration-300 ease-out scale-120 animate-moveGrid"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        transform: `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px)`
      }}
    >
    </div>
  );
}
