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
      className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 lg:px-20 mt-24 md:mt-28 lg:mt-36 w-full z-[20] gap-10"
    >
      {/* Left Column Text Content */}
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-medium tracking-wide">
            AI/ML Specialist & Full Stack Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          <span>
            Architecting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-indigo-500">
              Intelligent AI Systems
            </span>{" "}
            & Scalable Infrastructure.
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-2 my-2 max-w-[620px]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Hey its Shubham Ranjan
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            I am a Software Engineer and Information Technology undergraduate at IIIT Bhopal, specializing in scalable full-stack development and artificial intelligence. I build high-performance, resilient systems that bridge the gap between complex data and user experience—ranging from clinical-grade predictive AI and Generative AI applications to real-time, low-latency web platforms. As an avid problem solver, hackathon winner, and active competitive programmer, I thrive on tackling ambitious challenges and transforming them into impactful, real-world technology.
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 mt-2"
        >
          <a
            className="py-3 px-8 button-primary text-center text-white font-semibold cursor-pointer rounded-xl hover:shadow-[0_0_30px_rgba(112,66,248,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            href="#projects"
          >
            Explore Projects
          </a>
          <a
            className="py-3 px-8 text-center text-white font-semibold cursor-pointer rounded-xl border border-[#7042f88b] hover:border-purple-500 hover:shadow-[0_0_25px_rgba(112,66,248,0.3)] transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            href="https://drive.google.com/file/d/1zWKMxGEVbXMU5CGSWTf3KAqcEbmy1uTx/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Resume
          </a>
        </motion.div>
      </div>

      {/* Right Column 3D Planet & Floating Orbital Badges */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-full flex justify-center items-center"
      >
        <Floating3D />
      </motion.div>
    </motion.div>
  );
};
