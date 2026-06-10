"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useState, type FormEvent } from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const mailtoLink = `mailto:shubham0003nov@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.open(mailtoLink, "_blank");

    setTimeout(() => setIsSending(false), 1000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: RxGithubLogo,
      link: "https://github.com/Shubhammm24",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: RxLinkedinLogo,
      link: "https://www.linkedin.com/in/shubham-ranjan-58abba28b/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-20"
    >
      {/* Header */}
      <div className="w-full h-auto flex flex-col items-center justify-center mb-10">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4"
        >
          Contact Me
        </motion.h2>

        <motion.p
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="cursive text-[18px] text-gray-300 text-center max-w-[600px]"
        >
          Have a project in mind or want to collaborate? Let&apos;s connect!
        </motion.p>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row gap-10">
        {/* Left - Info Cards */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Email Card */}
          <a
            href="mailto:shubham0003nov@gmail.com"
            className="contact-card group"
          >
            <div className="contact-card-icon">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
                Email
              </h3>
              <p className="text-gray-400 text-sm">
                shubham0003nov@gmail.com
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+917488376912" className="contact-card group">
            <div className="contact-card-icon">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
                Phone
              </h3>
              <p className="text-gray-400 text-sm">+91 7488376912</p>
            </div>
          </a>

          {/* Location Card */}
          <div className="contact-card group">
            <div className="contact-card-icon">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
                Location
              </h3>
              <p className="text-gray-400 text-sm">IIIT Bhopal, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                className={`w-12 h-12 rounded-full border border-[#7042f88b] flex items-center justify-center text-gray-400 ${social.color} hover:border-purple-500 hover:shadow-[0_0_15px_rgba(112,66,248,0.3)] transition-all duration-300`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <a
              href="https://leetcode.com/u/Shubhammm24/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-12 h-12 rounded-full border border-[#7042f88b] flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(112,66,248,0.3)] transition-all duration-300 font-bold text-xs"
            >
              LC
            </a>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          variants={slideInFromRight(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex-1 glass-card p-8 rounded-2xl flex flex-col gap-5"
        >
          <div className="relative">
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="contact-input peer"
              placeholder=" "
            />
            <label className="contact-label">Your Name</label>
          </div>

          <div className="relative">
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="contact-input peer"
              placeholder=" "
            />
            <label className="contact-label">Your Email</label>
          </div>

          <div className="relative">
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="contact-input peer"
              placeholder=" "
            />
            <label className="contact-label">Subject</label>
          </div>

          <div className="relative">
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="contact-input peer resize-none"
              placeholder=" "
            />
            <label className="contact-label">Your Message</label>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 mt-2 rounded-lg font-semibold text-white button-primary hover:shadow-[0_0_25px_rgba(112,66,248,0.4)] transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">
              {isSending ? "Opening Mail Client..." : "Send Message"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};
