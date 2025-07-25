"use client";
import React, { useContext, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-scroll";
import Image from "next/image";
import { ScrollContext } from "../providers/ScrollProvider";

const navLinks = [
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

export const resumeLink =
  "https://drive.google.com/file/d/1q1GvCYP-pihc6pnOu5fgY5zN-USw33Sk/view";

export default function Navbar() {
  const context = useContext(ScrollContext);
  const isScrolled = context?.isScrolled ?? false;
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 z-50 bg-primary h-fit w-full px-5 md:px-12 lg:px-25 text-white
    ${isScrolled ? "shadow-md" : ""}`}
    >
      <section className="w-full hidden md:flex justify-between mx-auto h-16 items-center gap-2">
        <Link
          to="home"
          className="flex justify-center items-center gap-2 text-2xl font-semibold cursor-pointer"
        >
          <span className="relative size-6">
            <Image fill src="/logo.svg" alt="logo" />
          </span>
          PRANOY
        </Link>

        <div className="flex justify-center items-center gap-5 text-white/70">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              smooth={true}
              duration={300}
              spy={true}
              offset={-80}
              activeClass="text-secondary font-semibold"
              className="cursor-pointer hover:text-secondary transition text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <a
            className="rounded-md flex justify-center items-center gap-2 py-1 px-4 bg-secondary/90 hover:bg-secondary text-lg font-semibold cursor-pointer transition "
            href={resumeLink}
            target="_blank"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </section>

      <section className="flex md:hidden justify-between items-center h-16 w-full">
        <Link
          to="home"
          className="flex justify-center items-center gap-2 text-xl font-semibold"
        >
          <span className="relative size-6">
            <Image fill src="/logo.svg" alt="logo" />
          </span>{" "}
          PRANOY
        </Link>

        <CgMenuRightAlt
          onClick={() => setOpen(!open)}
          className="flex justify-center items-center size-8 text-white"
        />

        <div
          className={`flex flex-col items-end py-5 gap-0 bg-primary shadow-lg absolute top-16 right-0
          trasition duration-500 ease-in-out rounded-bl-lg
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              smooth={true}
              duration={300}
              spy={true}
              offset={-80}
              className="relative font-semibold cursor-pointer pr-5 py-2 text-lg border-r-4 border-r-primary trasition duration-300 ease-in-out"
              activeClass=" border-r-secondary"
            >
              {item.name}
            </Link>
          ))}
          <a
            className="rounded-md flex justify-center items-center gap-2 py-1 px-5 mx-4 bg-secondary/90 hover:bg-secondary text-lg font-semibold cursor-pointer transition mt-6"
            href={resumeLink}
            target="_blank"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </section>
    </nav>
  );
}
