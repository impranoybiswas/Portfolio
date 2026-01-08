"use client";

import Section from "../ui/Section";
import { motion } from "motion/react";
import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";
import ContactLinks from "../components/ContactLinks";


export default function Contact() {
  return (
    <Section name="contact" title="" subtitle="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 relative">
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

        <div className="w-full flex flex-col items-center justify-between">
          <h2 className="text-3xl font-bold mt-4">Get in Touch</h2>

          <SocialLinks />
        
          <ContactLinks />
        </div>
      </div>
    </Section>
  );
}
