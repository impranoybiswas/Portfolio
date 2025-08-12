"use client";

import React from "react";
import { motion } from "motion/react";

export default function Test() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center relative opacity-30">
      <motion.div
        className="rounded-full w-40 h-40 bg-pink-200 shadow-lg"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1,  scale: 1 }}
       transition={{
        delay: 1,
          type: "spring",
          stiffness: 80,
          damping: 15,
          mass: 2
        }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
      />
    </div>
  );
}
