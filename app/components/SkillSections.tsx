"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: ReactNode;
  bgColor: string;
  color: string;
}

export default function SkillSections({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <>
      <h1 className="text-xl font-semibold my-5">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 items-center justify-center w-full">
        {skills.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 80,
              damping: 15,
              mass: 1.5,
            }}
            viewport={{ once: true, amount: 0.2 }}
            key={i}
            className="p-[1px] relative rounded-xl overflow-hidden"
          >
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent via-gray-300 to-transparent scale-130 z-5 animate-slowSpin" />
            <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 bg-base-100 hover:bg-accent p-4 rounded-xl group relative z-10">
              <div
                className={`size-15 flex justify-center items-center rounded-lg 
                ${item.color} ${item.bgColor} text-5xl group-hover:scale-110 duration-500 ease-in-out transition`}
              >
                {item.icon}
              </div>
              <p className="text-lg lg:text-2xl font-semibold">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
