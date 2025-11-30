"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const educations = [
  {
    degree: "MSc. in Mathematics",
    institution: "National University",
    session: "2020 - 2021",
  },
  {
    degree: "BSc. in Mathematics",
    institution: "National University",
    session: "2016 - 2017",
  },
  {
    degree: "HSC in Science",
    institution: "Cox's Bazar Govt. College",
    session: "2014 - 2015",
  },
  {
    degree: "SSC in Science",
    institution: "Cox's Bazar Govt. High School",
    session: "2011 - 2012",
  },
];

export default function About() {
  return (
    <Section name="about" title="About Me" className="relative">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 z-10">
        <div className="text-white/70 text-center md:text-justify text-base md:text-lg lg:flex-2 leading-6 md:leading-8 space-y-4">
          <p>
            I am <strong>Pranoy Biswas Bappa</strong>, a postgraduate in
            <strong> Mathematics</strong> with a deep passion for coding, design,
            and modern technology. My journey into web development began in 2025
            through the <strong>Programming Hero</strong> program, where I built
            a solid foundation in contemporary tech stacks, clean architecture,
            and industry best practices.
          </p>

          <p>
            Combining expertise in both web development and graphic design, I
            focus on crafting responsive user-centric applications that balance
            functionality with refined visual design. My background in
            mathematics strengthens my analytical thinking, enabling me to build
            efficient, structured, and logic-driven solutions.
          </p>

          <p>
            Curiosity drives my learning. I actively explore new frameworks,
            tools, and emerging technologies to stay ahead in a rapidly evolving
            field. As a developer, I am committed, adaptable, and
            attentive—qualities that help me understand user needs clearly and
            translate them into meaningful digital experiences.
          </p>

          <p>
            For me, technology is more than a career. It is a continuous journey
            of creativity, learning, and purposeful innovation.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:border-l md:border-white pl-5 lg:pl-8 lg:flex-1"
        >
          <h1 className="pb-6 text-2xl md:text-3xl font-semibold text-shadow-xs">
            Education
          </h1>
          <div className="flex flex-col gap-5 ">
            {educations.map((edu, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex gap-2 items-center font-semibold text-xl">
                  <FaGraduationCap /> {edu.institution}
                </div>
                <div className="flex gap-2 items-center opacity-70">
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

      <FaGraduationCap className="size-40 md:size-64 absolute right-0 -bottom-20 z-5 opacity-5" />
    </Section>
  );
}
