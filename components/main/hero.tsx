"use client";

import { useState, useEffect } from "react";
import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full">
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      )}

      {/* Mobile-only dark overlay for perfect text readability without borders */}
      <div className="absolute inset-0 bg-black/60 lg:bg-transparent -z-10" />

      <HeroContent />
    </div>
  );
};
