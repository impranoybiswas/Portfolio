"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa6";
import Button from "../ui/Button";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      await emailjs.send(
        "service_n9o5j6r", // replace with your EmailJS service ID
        "template_zecffvo", // replace with your EmailJS template ID
        { name, email, message },
        "Ol57Hy414peihTahw" // replace with your EmailJS public key
      );
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSendEmail}
      className="w-full flex flex-col gap-5 md:gap-7"
    >
      <div>
        <label htmlFor="name" className="block mb-1 font-medium text-white">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-2 focus:ring-secondary/70 transition"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-white">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-2 focus:ring-secondary/70 transition"
          placeholder="example@mail.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 font-medium text-white">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          required
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-2 focus:ring-secondary/70 resize-none transition"
          placeholder="Write your message here..."
        />
      </div>

      <Button
        type="submit"
        label={isLoading ? "Sending..." : "Send Message"}
        className="w-full py-5"
        isOutline={false}
        isLarge={false}
        leftIcon={
          isLoading ? (
            <span className="animate-spin h-5 w-5 rounded-full border-t-2 border-white" />
          ) : (
            <FaPaperPlane />
          )
        }
        disabled={isLoading}
      />
    </form>
  );
}
