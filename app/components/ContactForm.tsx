"use client";
import React, { FormEvent, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import Button from "../ui/Button";
import toast from "react-hot-toast";

/**
 * ContactForm Component
 *
 * Displays a contact form with fields for Name, Email, and Message.
 * Handles form submission via API route `/api/send-email`.
 * Uses `react-hot-toast` for user feedback.
 *
 * @returns {JSX.Element} The contact form component
 */
export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Handles the form submission event.
   * Sends data to the backend API and handles success/error states.
   *
   * @param {FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.currentTarget).entries();
    const formData = Object.fromEntries(form);

    const name = formData.name as string;
    const email = formData.email as string;
    const message = formData.message as string;

    const emailData = {
      name,
      email,
      subject: `New Message from ${name}`,
      html: `<div>
        <p style="font-size: 16px; font-weight: bold; color: blue;">New Message from ${name}</p>
        <p>Name: ${name}</p>
        <i style="color: gray; font-size: 8px;">Email: ${email}</i>
        <p>Message: ${message}</p>
        </div>`,
    };

    try {
      const res = await fetch(
        "https://nextjs-test-pranoy.vercel.app/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        },
      );

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
      console.log("error", error);
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

      <Button
        isOutline={false}
        isLarge={false}
        type="submit"
        label={isLoading ? "Sending..." : "Send Message"}
        className="w-full py-5"
        onClick={() => {}}
        leftIcon={
          isLoading ? (
            <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-70" />
          ) : (
            <FaPaperPlane />
          )
        }
      />
    </form>
  );
}
