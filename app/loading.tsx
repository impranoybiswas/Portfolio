import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <Image className="animate-ping" src="/logo.svg" alt="loading" width={100} height={100} />
    </main>
  );
}
