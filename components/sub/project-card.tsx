"use client";

import Image from "next/image";
import Link from "next/link";
import { TiltCard } from "@/components/sub/tilt-card";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <TiltCard className="flex-1">
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] block group"
      >
        {/* Image with overlay */}
        <div className="relative overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          {/* View project badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-600/80 text-white text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            View Project →
          </div>
        </div>

        <div className="relative p-4 bg-[#030014]/80">
          <h1 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {title}
          </h1>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </Link>
    </TiltCard>
  );
};
