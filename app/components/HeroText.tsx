"use client";
import React from "react";
import { SiReaddotcv } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { resumeLink } from "../layouts/Navbar";
import { IoIosCodeWorking } from "react-icons/io";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 2,
      }}
      viewport={{ once: true, amount: 0.2 }}
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
        applications using Next.Js React.Js, TailwindCSS, Express.js, MongoDB,
        Firebase.
      </p>
      <p className="flex-1 font-semibold text-base lg:text-xl text-white text-center md:text-left mt-4">
        Let&apos;s discuss your next project.
      </p>
      <div className="hidden md:flex items-center gap-4 mt-5">
        <Link
          href="https://www.linkedin.com/in/impranoybiswas/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-white hover:text-secondary transition-all duration-300 ease-in-out"
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          href="https://www.github.com/impranoybiswas/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-white hover:text-secondary transition-all duration-300 ease-in-out"
        >
          <FaGithub size={30} />
        </Link>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 mt-12">
        <Link href={resumeLink} target="_blank">
          <Button
            isOutline={false}
            label="Show Resume"
            leftIcon={<SiReaddotcv />}
            isLarge={true}
          />
        </Link>
        <ScrollLink
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
        </ScrollLink>
      </div>
    </motion.div>
  );
}
