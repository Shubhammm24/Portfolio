"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useCallback, type MouseEvent } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [magnetOffset, setMagnetOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setMagnetOffset({
      x: (e.clientX - centerX) * 0.35,
      y: (e.clientY - centerY) * 0.35,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMagnetOffset({ x: 0, y: 0 });
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 120 }}
      className="relative flex flex-col items-center"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer"
        style={{ padding: "16px" }}
      >
        {/* The icon that moves magnetically */}
        <motion.div
          animate={{
            x: magnetOffset.x,
            y: magnetOffset.y,
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 12,
            mass: 0.4,
          }}
          className="relative flex items-center justify-center"
        >
          {/* Glow behind icon */}
          <div
            className="absolute inset-[-12px] rounded-full transition-all duration-300"
            style={{
              background: isHovered
                ? "radial-gradient(circle, rgba(112,66,248,0.3) 0%, transparent 70%)"
                : "none",
              boxShadow: isHovered
                ? "0 0 30px rgba(112,66,248,0.4), 0 0 60px rgba(112,66,248,0.15)"
                : "none",
            }}
          />

          {/* Border ring */}
          <div
            className="absolute inset-[-6px] rounded-full border-2 transition-all duration-200"
            style={{
              borderColor: isHovered ? "rgba(112,66,248,0.5)" : "transparent",
            }}
          />

          {/* Actual icon image */}
          <Image
            src={`/skills/${src}`}
            width={width}
            height={height}
            alt={name}
            className="relative z-10 select-none"
            draggable={false}
            style={{ width: `${width}px`, height: `${height}px`, objectFit: "contain" }}
          />
        </motion.div>

        {/* Tooltip */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-semibold text-white rounded-full whitespace-nowrap pointer-events-none z-20 transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, rgba(112,66,248,0.9), rgba(99,56,232,0.9))",
            opacity: isHovered ? 1 : 0,
            transform: `translateX(-50%) translateY(${isHovered ? "0" : "6px"})`,
            boxShadow: "0 4px 12px rgba(112,66,248,0.3)",
          }}
        >
          {name}
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
            style={{ background: "rgba(112,66,248,0.9)" }}
          />
        </div>
      </div>
    </motion.div>
  );
};
