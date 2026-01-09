"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { TbListDetails, TbWorld } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

import Button from "../ui/Button";
import Portal from "../ui/Portal";

export default function ProjectDetails({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false);

  const { title, image, description, features, stack, live, github } = project;

  return (
    <>
      {/* Trigger */}
      <Button
        isLarge={false}
        isOutline={false}
        onClick={() => setShowModal(true)}
        label="View Details"
        leftIcon={<TbListDetails />}
      />

      {/* Modal */}
      {showModal && (
        <Portal>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowModal(false)}
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              bg-black/60 backdrop-blur-xl
              px-4 min-h-dvh
            "
          >
            {/* Modal Box */}
            <motion.div
              initial={{ y: 30, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative w-full max-w-5xl
                rounded-2xl
                border border-indigo-500/20
                bg-[#260a2e]
                shadow-2xl shadow-indigo-500/30
                max-h-[90vh] overflow-y-scroll
              "
            >
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="
                  absolute right-2 top-4 z-20
                  flex h-9 w-9 items-center justify-center
                  rounded-full bg-white/10
                  hover:bg-red-500/70 transition cursor-pointer
                "
              >
                <TfiClose className="text-white text-sm" />
              </button>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8 overflow-y-scroll h-auto md:h-[90vh]">
                {/* Details */}
                <div className="flex flex-col gap-4 text-white">
                  <h2 className="text-2xl font-bold text-indigo-400">
                    {title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {description}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold mb-1">Features</h3>
                    <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                      {features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div>
                    <h3 className="font-semibold mb-1">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            flex items-center gap-1
                            rounded-full px-3 py-1
                            text-xs bg-white/10
                          "
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href={github} target="_blank">
                      <Button
                        isLarge={false}
                        isOutline={false}
                        label="GitHub"
                        leftIcon={<FaGithub />}
                      />
                    </Link>
                    <Link href={live} target="_blank">
                      <Button
                        isLarge={false}
                        label="Live"
                        isOutline
                        leftIcon={<TbWorld />}
                      />
                    </Link>
                  </div>
                </div>
                {/* Image */}
                <div className="rounded-xl overflow-y-scroll h-full border border-white/10">
                  <div className="relative z-10">
                    <Image
                      src={image}
                      alt={title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </>
  );
}
