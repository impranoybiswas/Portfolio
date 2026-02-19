"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FaQrcode } from "react-icons/fa";
import Portal from "../ui/Portal";
import Image from "next/image";

export default function QRModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Trigger */}
      <div
        className="bg-accent shadow shadow-primary p-4 rounded-xl flex flex-col items-center justify-center w-full opacity-30 hover:opacity-40 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <FaQrcode size={50} />
        <span className="text-xs mt-2">Show QR Code</span>
      </div>

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
                relative w-200 rounded-2xl border border-indigo-500/20
                bg-[#260a2e] shadow-2xl shadow-indigo-500/30 max-h-[90vh]
                grid grid-cols-3 p-10 gap-10
              "
            >
              <div className="bg-white/20 rounded-2xl border border-indigo-500/20 col-span-2 row-span-2">
                <Image className="shadow-2xl shadow-indigo-500/30" src="/qr-code/whatsapp.svg" alt="whatsapp" width={500} height={500} />
              </div>
              <div className="bg-white/20 rounded-2xl border border-indigo-500/20">
                <Image className="shadow-2xl shadow-indigo-500/30" src="/qr-code/gmail.svg" alt="whatsapp" width={500} height={500} />
              </div>
              <div className="bg-white/20 rounded-2xl border border-indigo-500/20">
                <Image className="shadow-2xl shadow-indigo-500/30" src="/qr-code/telegram.svg" alt="whatsapp" width={500} height={500} />
              </div>


            </motion.div>
          </motion.div>
        </Portal>
      )}
    </>
  );
}
