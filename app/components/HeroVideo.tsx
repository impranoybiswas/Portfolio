"use client";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeroVideo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-50 md:size-80 lg:size-100 rounded-full bg-background/20 animate-pulse relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full size-51 md:size-81 lg:size-101 border border-primary/20" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 2,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-linear-to-r from-indigo-500/0 via-primary/50 to-primary rounded-full size-51 md:size-81 lg:size-101 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="bg-background rounded-full overflow-hidden size-50 md:size-80 lg:size-100 relative transition-all duration-700 ease-in-out group shadow-inner shadow-black/10">
        <video
          key={isDark ? "dark" : "light"}
          src={
            isDark
              ? "https://res.cloudinary.com/dudvlnxio/video/upload/v1774808863/me-dark_cvgh9j.mp4"
              : "https://res.cloudinary.com/dudvlnxio/video/upload/v1774808852/me-light_cwfkrc.mp4"
          }
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover ${isDark ? "mix-blend-screen" : "mix-blend-multiply"}`}
        />
      </div>
    </motion.div>
  );
}
