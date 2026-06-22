"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { Floating3D } from "@/components/main/floating-3d";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer & AI Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Shubham Ranjan
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          B.Tech IT student at IIIT Bhopal building scalable web applications
          and AI-powered solutions. Experienced in React, Node.js, Python,
          PyTorch, and cloud infrastructure.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4"
        >
          <a
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:shadow-[0_0_25px_rgba(112,66,248,0.4)] transition-all duration-300"
            href="#projects"
          >
            View my work
          </a>
          <a
            className="py-2 px-6 text-center text-white cursor-pointer rounded-lg border border-[#7042f88b] hover:border-purple-500 hover:shadow-[0_0_25px_rgba(112,66,248,0.3)] transition-all duration-300 flex items-center gap-2"
            href="/resume.pdf"
            download
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Floating3D />
      </motion.div>
    </motion.div>
  );
};
