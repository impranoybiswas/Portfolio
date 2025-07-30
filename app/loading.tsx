import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      {/* <Image className="animate-ping" src="/logo.svg" alt="loading" width={60} height={60} /> */}
      Loading....
    </main>
  );
}
