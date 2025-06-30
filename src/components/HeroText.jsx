import React from "react";
import { Typewriter } from "react-simple-typewriter";
export default function HeroText() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:items-start flex-1">
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
      I specialize in creating performant, responsive, and maintainable web applications using React, TailwindCSS, Express.js, MongoDB. Let's discuss your next project.
      </p>
    </div>
  );
}
