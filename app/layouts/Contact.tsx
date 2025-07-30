"use client";
import React from "react";
import Section from "../ui/Section";

import SocialLinks from "../components/SocialLinks";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Section name="contact" title="Get in Touch" subtitle="">
      <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        <div
          data-aos="fade-right"
          className="bg-accent shadow shadow-primary p-5 lg:p-8 rounded-xl flex flex-col items-center justify-center w-full"
        >
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-100 text-center text-sm md:text-base mb-6">
            Have a question or want to work together? <br />
            Fill out the form and I&apos;ll get back to you!
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col items-center p-0 lg:p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Contact on Social Media
          </h2>
          <SocialLinks />
        </div>
      </div>
    </Section>
  );
}
