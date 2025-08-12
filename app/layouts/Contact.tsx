"use client";
import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const messengers = [
  {
    name: "Email",
    url: "mailto:impranoybiswas@gmail.com",
    ariaLabel: "Send email",
    icon: <FaEnvelope />,
    hoverColor: "hover:text-blue-800",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/8801521305572",
    ariaLabel: "Chat on WhatsApp",
    icon: <FaWhatsapp />,
    hoverColor: "hover:text-green-600",
  },
  {
    name: "Telegram",
    url: "https://t.me/impranoybiswas",
    ariaLabel: "Chat on Telegram",
    icon: <FaTelegramPlane />,
    hoverColor: "hover:text-orange-400",
  },
];

export default function Contact() {
  return (
    <Section name="contact" title="Get in Touch" subtitle="">
      <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -120, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-accent shadow shadow-primary p-5 lg:p-8 rounded-xl flex flex-col items-center justify-center w-full"
        >
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-100 text-center text-sm md:text-base mb-6">
            Have a question or want to work together? <br />
            Fill out the form and I&apos;ll get back to you!
          </p>
          <ContactForm />
        </motion.div>

        <div className="flex flex-col items-center justify-between">
          <h2 className="text-2xl font-semibold mt-10">
            Contact on Social Media
          </h2>

          <SocialLinks />
          <div className="flex justify-center items-center w-auto h-auto rounded-md p-[2px] relative overflow-hidden">
            <div
              className="bg-gradient-to-b via-primary/40 to-transparent from-transparent h-full w-full rounded-md z-10 scale-150
          absolute top-0 left-0 animate-slowSpin"
            />
            <div className="w-full h-full m-auto p-4 rounded-md shadow-sm bg-base-100 z-12 md:px-10">
              <label className="block mb-3 text-lg font-semibold text-primary text-center">
                Contact Me
              </label>
              <div className="flex justify-around gap-2 text-3xl text-white">
                {messengers.map(
                  ({ name, url, ariaLabel, icon, hoverColor }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ariaLabel}
                      className={`${hoverColor} size-12 cursor-pointer flex justify-center items-center border rounded-full`}
                    >
                      {icon}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
