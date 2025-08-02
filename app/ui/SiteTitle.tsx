import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

interface Props {
  className?: string;
}

export default function SiteTitle({className} : Props) {
  return (
    <Link
      to="home"
      className={`flex justify-start items-center gap-0 text-xl md:text-2xl font-semibold cursor-pointer ${className}`}
    >
      <span className="relative size-6 md:size-7">
        <Image fill src="/assets/logo.svg" alt="logo" />
      </span>
    </Link>
  );
}
