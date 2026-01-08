"use client";
import React from "react";
import HeroText from "../components/HeroText";
import HeroPhoto from "../components/HeroPhoto";
import Section from "../ui/Section";

export default function Header() {
  return (
    <Section
      title=""
      subtitle=""
      name="home"
      className="flex flex-col-reverse md:flex-row items-center gap-5 w-full min-h-dvh pt-20 pb-10"
    >
      <HeroText />
      <HeroPhoto />
    </Section>
  );
}
