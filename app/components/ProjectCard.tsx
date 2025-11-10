"use client";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "motion/react";
import Link from "next/link";
import ProjectDetails from "./ProjectDetails";

export default function ProjectCard({ project }: { project: Project }) {
  const { id, title, image, short_desc, stack, live, github } = project;

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
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeIn", delay: id / 10 + 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center p-[1px] bg-accent border border-primary/30 rounded-2xl shadow-md group"
    >
      <div className="flex flex-col p-5 lg:p-8 bg-accent/85 rounded-2xl group-hover:border group-hover:border-transparent">
        <h2 className="text-3xl font-bold mb-3 text-center">{title}</h2>
        <p className="text-gray-100 text-center mb-5">{short_desc}</p>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {stack.map((tech, index) => (
            <span
              key={index}
              className={`flex items-center gap-1 px-3 py-1 rounded-md shadow text-xs ${tech.bg} ${tech.color}`}
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
        {/* Image Section */}
        <div className="w-full overflow-y-scroll h-64 shadow-lg rounded-lg">
          <div className="w-full h-auto relative ">
            <Image
              src={image}
              alt={title}
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <ProjectDetails project={project} />

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
    </motion.div>
  );
}
