import React from "react";
import Container from "../customs/Container";
import Title from "../customs/Title";
import { FaGraduationCap } from "react-icons/fa6";

export default function About() {
    return (
      <Container id="about" >
        <Title title="About Me" />

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 z-10">
          <div className="text-white/70 text-center md:text-justify text-base md:text-lg lg:flex-2">

        <p className="leading-6 md:leading-8">
          I am a dedicated <span className="font-medium">Full-Stack Web Developer</span> from Bangladesh,
          with a strong passion for crafting seamless digital experiences that merge
          aesthetic design with robust functionality. Proficient in technologies such as{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>,{" "}
          <span className="font-semibold">Node.js</span>,{" "}
          <span className="font-semibold">Express.js</span>, and{" "}
          <span className="font-semibold">MongoDB</span>, I specialize in building dynamic,
          high-performance web applications that are both user-friendly and visually compelling.
        </p>

        <p className="mt-6 leading-6 md:leading-8">
          My development journey began with platforms like{" "}
          <span className="font-medium">freeCodeCamp</span> and{" "}
          <span className="font-medium">The Odin Project</span>, and I am currently sharpening my skills
          through <span className="font-medium">Programming Hero</span>. I'm also preparing to dive into{" "}<span className="font-medium">CS50x</span> to deepen my computer science knowledge.
        </p>

        <p className="mt-6 leading-6 md:leading-8">
          Beyond coding, I am deeply passionate about <span className="font-medium">tech hardware</span> and performance optimization. I bring the same consistency and focus from my fitness
          routine into my code—disciplined, driven, and always pushing boundaries.
        </p>

        <p className="mt-6 font-semibold">
          Let's collaborate and build something extraordinary.
        </p>
    
        
          </div>
          <div data-aos="fade-left" className="md:border-l-2 md:border-base-100 pl-5 lg:pl-8 lg:flex-1">
          <h1 className="pb-6 text-2xl md:text-3xl font-semibold text-shadow-xs">Education</h1>
        <div className="flex flex-col gap-5">
         
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center font-semibold text-xl"> <FaGraduationCap /> National University</div>
              <div className="flex gap-2 items-center opacity-70"> <span className="text-transparent font-semibold text-xl"><FaGraduationCap /></span>MSc. in Mathematics (2020-2021)</div>
          </div>
          <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center font-semibold text-xl"> <FaGraduationCap /> National University</div>
              <div className="flex gap-2 items-center opacity-70"> <span className="text-transparent font-semibold text-xl"><FaGraduationCap /></span>BSc. in Mathematics (2016-2017)</div>
          </div>
          <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center font-semibold text-xl"> <FaGraduationCap /> Cox's Bazar Govt. College</div>
              <div className="flex gap-2 items-center opacity-70"> <span className="text-transparent font-semibold text-xl"><FaGraduationCap /></span>HSC in Science (2014-2015)</div>
          </div>
          <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center font-semibold text-xl"> <FaGraduationCap /> Cox's Bazar Govt. High School</div>
              <div className="flex gap-2 items-center opacity-70"> <span className="text-transparent font-semibold text-xl"><FaGraduationCap /></span>SSC in Science (2011-2012)</div>
          </div>
        </div>


          </div>

        </div>


        <FaGraduationCap className="h-40 w-40 md:w-80 md::h-80 lg:w-100 lg:h-100 absolute right-0 bottom-0 z-5 opacity-5" />

        

      </Container>
    );
  }