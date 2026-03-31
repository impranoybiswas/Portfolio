"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  // Get educations array from raw translations
  const educations = t.raw("educations") as {
    degree: string;
    institution: string;
    session: string;
  }[];

  return (
    <Section name="about" title={t("title")} className="relative">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 z-10">
        <div className="text-foreground/80 text-center md:text-justify text-base md:text-lg lg:flex-2 leading-6 md:leading-8 space-y-4">
          {(t.raw("description") as string[]).map((para, index) => (
            <p key={index}>
              {para
                .split("**")
                .map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
                )}
            </p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:border-l md:border-secondary/40 pl-5 lg:pl-8 lg:flex-1"
        >
          <h1 className="pb-8 text-2xl md:text-3xl font-semibold text-shadow-xs">
            {t("educationTitle")}
          </h1>
          <div className="flex flex-col gap-5 ">
            {educations.map((edu, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex gap-2 items-center font-semibold text-lg">
                  <FaGraduationCap /> {edu.institution}
                </div>
                <div className="flex gap-3 text-sm items-center opacity-70">
                  <span className="text-transparent font-semibold text-xl">
                    <FaGraduationCap />
                  </span>
                  {edu.degree} ({edu.session})
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <FaGraduationCap className="size-40 md:size-64 absolute right-0 bottom-20 z-5 opacity-5" />
    </Section>
  );
}
