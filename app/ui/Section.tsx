"use client";
import React, { ReactNode } from "react";
import { Element } from "react-scroll";

interface Props {
  name: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ name, className, title, subtitle, children }: Props) {
  return (
    <Element
      name={name}
      className={`flex flex-col justify-center items-center mb-15 md:mb-20 ${className}`}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-base md:text-lg opacity-65 mb-6 md:mb-8">{subtitle}</p>
      {children}
    </Element>
  );
}
