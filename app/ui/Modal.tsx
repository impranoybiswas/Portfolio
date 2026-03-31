"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { CgClose } from "react-icons/cg";

interface ModalProps {
  label: ReactNode; // Trigger content
  children: ReactNode; // Modal content
  title?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

/**
 * Professional Modal Component (Self-Managed Trigger)
 *
 * Features:
 * - Built-in trigger mechanism
 * - Smooth entrance/exit via AnimatePresence
 * - Backdrop blur and responsive sizing
 * - Professional header and close button
 */
export default function Modal({
  label,
  children,
  title,
  size = "md",
}: ModalProps) {
  const [showModal, setShowModal] = useState(false);

  const containerSizes = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
    xl: "max-w-5xl",
  };

  return (
    <>
      {/* Trigger */}
      <div
        className="cursor-pointer active:scale-95 transition-transform h-full w-full flex items-center justify-center"
        onClick={() => setShowModal(true)}
      >
        {label}
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/30"
            />

            {/* Modal Container */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.4,
                y: 200,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.4,
                y: 200,
                filter: "blur(10px)",
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 350,
                mass: 0.5,
              }}
              onClick={(e) => e.stopPropagation()}
              className={`
                relative bg-background/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-primary/20 
                w-full ${containerSizes[size]} overflow-hidden flex flex-col
              `}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-secondary/20 bg-base-200/40">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  {title || "Modal Details"}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="size-10 rounded-full flex items-center justify-center text-foreground/40 hover:text-red-400 hover:bg-red-400/10 transition-all cursor-pointer active:scale-90"
                >
                  <CgClose size={22} />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-8 overflow-y-auto max-h-[80vh] custom-scrollbar">
                {children}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
