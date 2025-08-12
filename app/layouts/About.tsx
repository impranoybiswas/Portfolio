"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Section from "../ui/Section";
import {motion} from "framer-motion";

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
        <div className="text-white/70 text-center md:text-justify text-base md:text-lg lg:flex-2">
          <p className="leading-6 md:leading-8">
          I am Pranoy Biswas Bappa, a postgraduate in Mathematics with a strong passion for coding, design, and technology. My journey in web development began in 2025 with the Programming Hero team, where I built a solid foundation in modern tech stacks and best practices.
          </p>

          <p className="mt-6 leading-6 md:leading-8">
          With expertise in both web development and graphic design, I specialize in creating responsive, user-friendly applications that blend functionality with visually appealing interfaces. My background in mathematics sharpens my problem-solving abilities, enabling me to develop efficient, logical, and well-structured solutions.
          </p>

          <p className="mt-6 font-semibold">
          Fueled by curiosity and a drive for innovation, I constantly explore new tools, frameworks, and emerging technologies. I am a dedicated developer, a keen listener, and a fast learner—qualities that help me understand client needs and deliver solutions that truly align with their goals. For me, technology is not just a profession but a lifelong journey of learning, creativity, and growth.
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
