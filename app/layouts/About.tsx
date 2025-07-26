import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Section from "../ui/Section";

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
            I am a dedicated{" "}
            <span className="font-medium">Full-Stack Web Developer</span> from
            Bangladesh, with a strong passion for crafting seamless digital
            experiences that merge aesthetic design with robust functionality.
            Proficient in technologies such as{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>,{" "}
            <span className="font-semibold">Node.js</span>,{" "}
            <span className="font-semibold">Express.js</span>, and{" "}
            <span className="font-semibold">MongoDB</span>, I specialize in
            building dynamic, high-performance web applications that are both
            user-friendly and visually compelling.
          </p>

          <p className="mt-6 leading-6 md:leading-8">
            Beyond coding, I am deeply passionate about{" "}
            <span className="font-medium">tech hardware</span> and performance
            optimization. I bring the same consistency and focus from my fitness
            routine into my code—disciplined, driven, and always pushing
            boundaries.
          </p>

          <p className="mt-6 font-semibold">
            Let&apos;s collaborate and build something extraordinary.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="md:border-l md:border-base-100 pl-5 lg:pl-8 lg:flex-1"
        >
          <h1 className="pb-6 text-2xl md:text-3xl font-semibold text-shadow-xs">
            Education
          </h1>
          <div className="flex flex-col gap-5">
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
        </div>
      </div>

      <FaGraduationCap className="size-40 md:size-64 absolute right-0 -bottom-20 z-5 opacity-5" />
    </Section>
  );
}
