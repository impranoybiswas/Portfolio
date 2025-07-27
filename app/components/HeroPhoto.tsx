import Image from "next/image";
import React from "react";

export default function HeroPhoto() {
  return (
    <div data-aos="fade-down-left" className="relative">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full size-52 md:size-82 lg:size-102 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-slowSpin" />

      <div className="bg-base-100 rounded-full overflow-hidden size-50 md:size-80 lg:size-100 relative">
        <Image
          src="/assets/photo.png"
          className="object-cover"
          alt="photo"
          fill
        />
      </div>
    </div>
  );
}
