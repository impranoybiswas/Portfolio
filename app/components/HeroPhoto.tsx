"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function HeroPhoto() {
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
          duration: 10, // slow rotation (seconds)
          repeat: Infinity, // loop forever
          ease: "linear", // keep speed constant
        }}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full size-52 md:size-82 lg:size-102 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="bg-base-100 hover:bg-accent rounded-full overflow-hidden size-50 md:size-80 lg:size-100 relative transision-all duration-700 ease-in-out group">
        <Image
          src="/assets/photo.png"
          className="object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
          alt="photo"
          fill
        />
      </div>
    </motion.div>
  );
}
