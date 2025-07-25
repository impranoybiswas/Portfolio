"use client";
import React from "react";
import { Element } from "react-scroll";
import HeroText from "../components/HeroText";
import HeroPhoto from "../components/HeroPhoto";

export default function Header() {
  return (
    <Element
      name="home"
      className="flex flex-col-reverse md:flex-row items-center gap-5 w-full"
    >
      <HeroText />
      <HeroPhoto />
    </Element>
  );
}
