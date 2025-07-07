import React, { useState } from "react";
import Container from "../customs/Container";
import Title from "../customs/Title";
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle email submission
  const handleEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  };
  return (
    <Container id="contact" customClass={"bg-primary"}>
      <Title title="Contacts" />
      <div className="w-full grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-secondary p-2 lg:p-8 rounded-xl flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-100 text-center mb-6">
            Have a question or want to work together? <br/>Fill out the form and I’ll
            get back to you!
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
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-lg bg-primary text-white font-medium shadow hover:bg-primary-dark transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Connect with me</h2>

          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-white hover:text-primary transition">
              <FaEnvelope className="text-xl" />
              <a href="mailto:youremail@example.com">youremail@example.com</a>
            </li>
            <li className="flex items-center gap-4 text-white hover:text-primary transition">
              <FaLinkedin className="text-xl" />
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yourprofile
              </a>
            </li>
            <li className="flex items-center gap-4 text-white hover:text-primary transition">
              <FaGithub className="text-xl" />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yourusername
              </a>
            </li>
            <li className="flex items-center gap-4 text-white hover:text-primary transition">
              <FaFacebook className="text-xl" />
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/yourprofile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
