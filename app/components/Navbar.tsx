"use client";
import React, { useContext, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-scroll";
import Image from "next/image";
import { ScrollContext } from "../providers/ScrollProvider";
import Button from "../ui/Button";

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
      className={`fixed top-0 z-50 bg-base-100 h-fit w-full px-5 md:px-12 lg:px-25 text-white
    ${isScrolled ? "shadow-sm shadow-secondary/30" : ""}`}
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
          <a href={resumeLink} target="_blank">
            <Button
              lebel="Resume"
              leftIcon={<FaDownload />}
              isOutline={false}
              isLarge={false}
            />
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

        <div className="flex justify-center items-center gap-3">
          <a
            href={"https://www.linkedin.com/in/impranoybiswas/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-white"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href={"https://www.github.com/pranoybiswas/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-white"
          >
            <FaGithub size={25} />
          </a>
          <CgMenuRightAlt
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center size-8 text-white"
          />
        </div>

        <div
          className={`flex flex-col items-end py-5 gap-0 bg-base-100 shadow-lg absolute top-16 right-0
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
              className="relative font-semibold cursor-pointer pr-5 py-2 text-xl border-r-5 border-r-base-100 trasition duration-300 ease-in-out mr-1"
              activeClass=" border-r-secondary"
            >
              {item.name}
            </Link>
          ))}
          <a className="mx-6 mt-5" href={resumeLink} target="_blank">
            <Button
              lebel="Resume"
              leftIcon={<FaDownload />}
              isOutline={false}
              isLarge={false}
            />
          </a>
        </div>
      </section>
    </nav>
  );
}
