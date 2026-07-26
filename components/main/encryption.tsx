"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      id="experience"
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experience
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">
            Backend Developer
          </h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px] max-w-[700px]">
        <div className="text-[18px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
          Yaseer Innovative Software Pvt. Ltd
        </div>
        <div className="cursive text-[16px] font-medium text-center text-gray-300 leading-relaxed">
          Engineered scalable Node.js & PostgreSQL backends handling 10,000+
          records with Redis caching (40% fewer queries, 200ms latency cut).
          Deployed WebSocket architecture for 1,000+ concurrent users and
          integrated Stripe, SendGrid & AWS S3. Built an AI chatbot with
          LangChain & OpenAI, reducing ticket resolution by 35%.
        </div>
      </div>

      {!isMobile && (
        <div className="w-full flex items-start justify-center absolute">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-auto"
          >
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};
