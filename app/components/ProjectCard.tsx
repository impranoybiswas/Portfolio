"use client";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "motion/react";
import Link from "next/link";
import ProjectDetails from "./ProjectDetails";
import { useTranslations } from "next-intl";

export default function ProjectCard({ project }: { project: any }) {
  const { id, key, title, image, stack, live, github } = project;
  const t = useTranslations("projects");

  /**
   * Handles mouse movement over the card to create a dynamic radial gradient glow effect.
   * Updates the background style directly for performance.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e - Mouse event
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px,  var(--primary), var(--background), var(--background))`;

    e.currentTarget.style.border = "none";
  };

  /**
   * Resets the card style when mouse leaves.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e - Mouse event
   */
  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.currentTarget.style.background = "var(--background)";
    e.currentTarget.style.border = "2px solid var(--base-200)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeIn", delay: id / 10 + 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center p-px bg-base-200 border border-primary/30 rounded-2xl shadow-md group text-foreground"
    >
      <div className="flex flex-col w-full h-full p-5 lg:p-8 bg-base-200/90 rounded-2xl group-hover:border group-hover:border-transparent">
        <h2 className="text-3xl font-bold mb-5 text-center">
          {t(`list.${key}.title`)}
        </h2>
        <p className="text-foreground/80 text-center mb-6">
          {t(`list.${key}.shortDesc`)}
        </p>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
          {stack.map((tech: any, index: number) => (
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
              label={t("buttons.github")}
              leftIcon={<FaGithub />}
            />
          </Link>
          <a href={live} target="_blank" rel="noreferrer">
            <Button
              isLarge={false}
              isOutline={true}
              label={t("buttons.live")}
              leftIcon={<TbWorld />}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
