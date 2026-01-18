"use client";

import HeroText from "../components/HeroText";
import HeroPhoto from "../components/HeroPhoto";
import { Element } from "react-scroll";

export default function Header() {
  return (
    <Element
      name="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-7 md:gap-5 lg:gap-6 pt-12 md:pt-0 w-full max-w-7xl min-h-dvh relative z-5 pb-30"
    >
      <HeroText />
      <HeroPhoto />
    </Element>
  );
}
