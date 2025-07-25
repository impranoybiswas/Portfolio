"use client";
import React, { ReactNode } from "react";
import { Element } from "react-scroll";

interface Props {
  name: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function Section({ name, title, subtitle, children }: Props) {
  return (
    <Element
      name={name}
      className={"flex flex-col justify-center items-center"}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-base md:text-lg opacity-65">{subtitle}</p>
      {children}
    </Element>
  );
}
