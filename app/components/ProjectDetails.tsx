"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { TbListDetails, TbWorld } from "react-icons/tb";
import { motion } from "motion/react";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectDetails({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { title, image, description, features, stack, live, github } = project;
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px,  #7522c2, #260a2e, #260a2e)`;

    e.currentTarget.style.border = "none";
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.currentTarget.style.background = "#260a2e";
    e.currentTarget.style.border = "1px solid #852ef430";
  };
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        label="View Details"
        isLarge={false}
        isOutline={false}
        leftIcon={<TbListDetails />}
      />
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
          onClick={() => setShowModal(false)}
          className="fixed top-0 left-0 w-full p-4 md:p-6 lg:p-10 h-dvh bg-black/30 backdrop-blur-2xl flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex justify-center items-center p-[1px] bg-accent border border-primary/30 group bg-base-100 rounded-xl shadow-md  w-full h-full text-gray-800 relative overflow-y-auto shadow-primary/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 lg:p-8 bg-accent/85 rounded-xl group-hover:border group-hover:border-transparent h-full text-white">
              <TfiClose
                className="absolute top-4 right-4 size-8 cursor-pointer text-primary hover:bg-white/10 rounded-full p-2 text-shadow-2xs hover:shadow-xs transition-all duration-500 ease-in-out"
                onClick={() => setShowModal(false)}
              />
              {/* Image Section */}
              <div className="w-full overflow-y-scroll h-[calc(100vh - 1)] shadow-md shadow-primary/20 rounded-xl order-2 md:order-1">
                <div className="relative z-10">
                  <Image
                    src={image}
                    alt={title}
                    height={1000}
                    width={1000}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              {/* Details Section */}
              <div className="flex flex-col gap-3 p-4 h-[calc(100vh-1)] order-1 md:order-2">
                <h1 className="text-primary text-2xl md:text-3xl font-bold text-shadow-2xs text-shadow-secondary">
                  {title}
                </h1>
                <p className="text-sm text-justify">{description}</p>
                <h1 className="font-semibold">Features :</h1>
                <ul className="list-disc list-inside text-sm">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <h1 className="font-semibold">Tech Stack :</h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  {stack.map((tech, index) => (
                    <span
                      key={index}
                      className={`flex items-center gap-1 px-3 py-1 rounded-xl shadow text-xs ${tech.bg} ${tech.color}`}
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-5 justify-center">
                  <Link href={github} target="_blank" rel="noreferrer">
                    <Button
                      isLarge={false}
                      isOutline={false}
                      label="GitHub"
                      leftIcon={<FaGithub />}
                    />
                  </Link>
                  <a href={live} target="_blank" rel="noreferrer">
                    <Button
                      isLarge={false}
                      isOutline={true}
                      label="Live"
                      leftIcon={<TbWorld />}
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
