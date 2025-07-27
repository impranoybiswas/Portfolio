"use client";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaBehance,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaPaperPlane, FaThreads } from "react-icons/fa6";
import Section from "../ui/Section";
import Button from "../ui/Button";

// Social link type (optional but good practice)
interface SocialLink {
  name: string;
  icon: React.ReactNode;
  link: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input & textarea changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle email submission
  const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  };

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/impranoybiswas/",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/impranoybiswas",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/impranoybiswas",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/impranoybiswas",
    },
    {
      name: "Behance",
      icon: <FaBehance />,
      link: "https://www.behance.com/impranoybiswas",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/impranoybiswas",
    },
    {
      name: "Threads",
      icon: <FaThreads />,
      link: "https://www.threads.net/@impranoybiswas",
    },
  ];

  return (
    <Section
      name="contact"
      title="Get in Touch"
      subtitle=""
      className="relative"
    >
      <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div
          data-aos="fade-right"
          className="bg-accent shadow shadow-primary p-5 lg:p-8 rounded-xl flex flex-col items-center justify-center w-full"
        >
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-100 text-center text-sm md:text-base mb-6">
            Have a question or want to work together? <br />
            Fill out the form and I&apos;ll get back to you!
          </p>

          <form onSubmit={handleEmail} className="space-y-6 w-full">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="example@mail.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-white"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full md:w-fit float-end">
              <Button
                isOutline={false}
                isLarge={false}
                onClick={() => handleEmail}
                lebel="Send Message"
                leftIcon={<FaPaperPlane />}
              />
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center p-0 lg:p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Contact on Social Media
          </h2>

          <div className="relative size-60 bg-transparent rounded-full mx-auto my-20 animate-socialSpin">
            {socialLinks.map((link, i) => {
              const angle = (i * 360) / socialLinks.length;
              const radius = 110; // adjust based on parent size
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <a
                  key={i}
                  href={link.link}
                  target="_blank"
                  className="bg-gradient-to-r from-gray-800 to-black/60 hover:bg-secondary hover:scale-110 transition-all duration-800 shadow-md rounded-full flex items-center justify-center gap-4 size-14 md:size-16 text-white cursor-pointer text-3xl md:text-4xl absolute animate-sillyMove text-shadow-sm"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="animate-socialSpinR">{link.icon}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
