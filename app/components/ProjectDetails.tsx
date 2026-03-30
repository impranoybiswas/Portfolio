"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TbListDetails, TbWorld } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

import Button from "../ui/Button";
import Portal from "../ui/Portal";
import { useTranslations } from "next-intl";

interface Project {
  key: string;
  image: string;
  stack: { name: string; icon: ReactNode }[];
  live: string;
  github: string;
}

export default function ProjectDetails({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false);
  const t = useTranslations("projects");

  const { key, image, stack, live, github } = project;

  return (
    <>
      {/* Trigger */}
      <Button
        isLarge={false}
        isOutline={false}
        onClick={() => setShowModal(true)}
        label={t("buttons.viewDetails")}
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
              fixed inset-0 z-9999
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
                rounded-2xl border border-secondary/50
                bg-base-100 shadow-2xl shadow-secondary/30
                max-h-[90vh] overflow-y-scroll
              "
            >
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="
                  absolute right-2 top-4 z-20
                  flex h-9 w-9 items-center justify-center
                  rounded-full bg-foreground/50
                  hover:bg-red-500/70 transition cursor-pointer
                "
              >
                <TfiClose className="text-background text-sm" />
              </button>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8 h-auto md:h-[88vh]">
                {/* Details */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-primary">
                    {t(`list.${key}.title`)}
                  </h2>

                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {t(`list.${key}.description`)}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t("labels.features")}
                    </h3>
                    <ul className="list-disc list-inside text-sm text-foreground space-y-1">
                      {(t.raw(`list.${key}.features`) as string[]).map(
                        (f, i) => (
                          <li key={i}>{f}</li>
                        ),
                      )}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t("labels.techStack")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            flex items-center gap-1
                            rounded-full px-3 py-1
                            text-xs bg-foreground/10
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
                        label={t("buttons.github")}
                        leftIcon={<FaGithub />}
                      />
                    </Link>
                    <Link href={live} target="_blank">
                      <Button
                        isLarge={false}
                        label={t("buttons.live")}
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
                      alt={key}
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
