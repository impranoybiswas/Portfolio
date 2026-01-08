import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

interface Props {
  className?: string;
}

export default function SiteTitle({ className }: Props) {
  return (
    <Link
      smooth={true}
      duration={300}
      spy={true}
      offset={-80}
      to="home"
      className={`relative size-5 md:size-6 flex justify-center items-center cursor-pointer ${className}`}
    >
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-pink-500 size-12 rounded-full"></span>
      <Image src="/logo.svg" width={60} height={60} alt="logo" />
    </Link>
  );
}
