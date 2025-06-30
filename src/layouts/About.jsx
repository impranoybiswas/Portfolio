import React from "react";
import Container from "../customs/Container";
import Title from "../customs/Title";
import { FaGraduationCap } from "react-icons/fa6";

export default function About() {
    return (
      <Container id="about" >
        <Title title="About Me" />
        <p className="opacity-70 text-justify">I'm a passionate full-stack web developer from Bangladesh, blending creative design with robust functionality. With hands-on experience in React, Tailwind CSS, Node.js, Express.js, and MongoDB, I specialize in building visually compelling and high-performing web applications. My fascination with programming and technology has driven me to carve a path in the tech industry.My journey began with FreeCodeCamp and The Odin Project, and I'm currently advancing my skills through Programming Hero, with plans to explore CS50x soon. Beyond development, I'm deeply enthusiastic about tech hardware, love optimizing performance, and bring the same discipline from the gym into my code consistent, focused, and always pushing limits. Let's build something extraordinary.</p>

        <h1 className="pt-16 pb-6 text-2xl font-semibold text-shadow-xs">Education</h1>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
         
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center font-semibold text-xl"> <FaGraduationCap /> National University</div>
              <div className="flex gap-2 items-center opacity-70"> <span className="text-transparent font-semibold text-xl"><FaGraduationCap /></span>MSc. in Mathematics (2020-2021)</div>
          </div>
          <div className="min-h-full w-1 bg-white rounded-full"></div>
          <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center font-semibold text-xl"> <FaGraduationCap /> National University</div>
              <div className="flex gap-2 items-center opacity-70"> <span className="text-transparent font-semibold text-xl"><FaGraduationCap /></span>BSc. in Mathematics (2016-2020)</div>
          </div>
          <div className="min-h-full w-1 bg-white rounded-full"></div>
          <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center font-semibold text-xl"> <FaGraduationCap /> Cox's Bazar Govt. College</div>
              <div className="flex gap-2 items-center opacity-70"> <span className="text-transparent font-semibold text-xl"><FaGraduationCap /></span>HSC. in Science (2020-2021)</div>
          </div>
        </div>

      </Container>
    );
  }