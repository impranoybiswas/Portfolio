"use client";
import React, { FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import Button from "../ui/Button";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.currentTarget).entries();
    const formData = Object.fromEntries(form);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Email sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSendEmail} className="space-y-6 w-full">
      <div>
        <label htmlFor="name" className="block mb-1 font-medium text-white">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-secondary/70 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
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
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-secondary/70 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
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
          required
          rows={6}
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-secondary/70 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none transition"
          placeholder="Write your message here..."
        ></textarea>
      </div>

      <div className="w-full md:w-fit float-end">
        <Button
          isOutline={false}
          isLarge={false}
          type="submit"
          label={isLoading ? "Sending..." : "Send Message"}
          onClick={() => {}}
          leftIcon={
            isLoading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-70" />
            ) : (
              <FaPaperPlane />
            )
          }
        />
      </div>
    </form>
  );
}
