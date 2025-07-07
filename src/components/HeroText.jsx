import React from "react";
import { SiReaddotcv } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { resumeLink } from "../utilities/data";
import { RiContactsBook3Line } from "react-icons/ri";
import { Link } from "react-scroll";

export default function HeroText() {
  return (
    <div data-aos="fade-left" data-aos-delay="100" className="w-full flex flex-col justify-center items-center md:items-start flex-1">
      <h1 className="text-white text-2xl md:text-3xl font-semibold">
        Hi There!
      </h1>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-3">
        I'm Pranoy Biswas Bappa
      </h1>
      <h1 className="text-secondary text-xl md:text-2xl mt-4">
        <Typewriter
          words={[
            "Full Stack MERN Developer",
            "Code Lover & Creative Thinker",
            "Lifelong Learner",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h1>
      <p className="text-base md:text-xl text-white mt-4 text-center md:text-left">
        I specialize in creating performant, responsive, and maintainable web
        applications using React, TailwindCSS, Express.js, MongoDB. Let's
        discuss your next project.
      </p>
      <div className="flex flex-col lg:flex-row justify-center gap-4 mt-12">
        <a
          href={resumeLink}
          target="_blank"
          className="h-14 px-5 flex justify-center items-center gap-2 rounded-md bg-secondary/80 hover:bg-secondary text-2xl font-semibold cursor-pointer transition"
        >
          <SiReaddotcv /> Show Resume
        </a>

        <Link
          to={"contact"}
          smooth={true}
          duration={300}
          spy={true}
          offset={-80} // Adjust based on your navbar height
          className="h-14 px-5 flex justify-center items-center gap-2 rounded-md border-secondary/80 text-secondary/80 hover:border-secondary hover-text-secondary border-2 text-2xl font-semibold cursor-pointer transition"
        >
          <RiContactsBook3Line /> Contact Me
        </Link>
      </div>
    </div>
  );
}
