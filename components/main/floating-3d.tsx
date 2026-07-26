"use client";

import { useState, useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Floating3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center overflow-visible select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Parallax Container tilting with mouse */}
      <motion.div
        animate={{
          rotateX: mousePos.y * -15,
          rotateY: mousePos.x * 15,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Central Dynamic Planet Image */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full max-w-[450px] max-h-[450px] md:max-w-[550px] md:max-h-[550px] z-10 pointer-events-none flex items-center justify-center"
        >
          <Image
            src="/hero-bg.svg"
            alt="Hero Background"
            width={550}
            height={550}
            className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(112,66,248,0.25)] scale-110"
            draggable={false}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
