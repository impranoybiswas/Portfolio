import React from "react";
import { SiReaddotcv } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { resumeLink } from "../layouts/Navbar";
import { IoIosCodeWorking } from "react-icons/io";
import Button from "../ui/Button";

export default function HeroText() {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="800"
      className="w-full flex flex-col justify-center items-center md:items-start flex-1"
    >
      <h1 className="text-white text-2xl md:text-3xl font-semibold">
        Hi There!
      </h1>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-3 text-shadow-xs">
        I&apos;m Pranoy Biswas Bappa
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
      <p className="text-base lg:text-xl text-white mt-4 text-center md:text-left">
        I specialize in creating performant, responsive, and maintainable web
        applications using React, TailwindCSS, Express.js, MongoDB. Let&apos;s
        discuss your next project.
      </p>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 mt-12">
        <a href={resumeLink} target="_blank">
          <Button
            isOutline={false}
            label="Show Resume"
            leftIcon={<SiReaddotcv />}
            isLarge={true}
          />
        </a>
        <Link
          to={"projects"}
          smooth={true}
          duration={300}
          spy={true}
          offset={-80}
        >
          <Button
            isOutline={true}
            label="Check My Work"
            leftIcon={<IoIosCodeWorking />}
            isLarge={true}
          />
        </Link>
      </div>
    </div>
  );
}
