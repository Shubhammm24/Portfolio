"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  SKILL_DATA,
} from "@/constants";

const SkillCategory = ({
  title,
  skills,
  startIndex,
}: {
  title: string;
  skills: ReadonlyArray<{
    skill_name: string;
    image: string;
    width: number;
    height: number;
  }>;
  startIndex: number;
}) => (
  <div className="w-full max-w-[900px] mb-6">
    <h3 className="text-sm font-semibold text-purple-400/80 uppercase tracking-[3px] mb-6 text-center">
      {title}
    </h3>
    <div className="flex flex-row justify-center flex-wrap gap-10 items-center">
      {skills.map((skill, i) => (
        <SkillDataProvider
          key={skill.skill_name}
          src={skill.image}
          name={skill.skill_name}
          width={skill.width}
          height={skill.height}
          index={startIndex + i}
        />
      ))}
    </div>
  </div>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-visible py-20"
    >
      {/* Background video - behind everything */}
      <div className="w-full h-full absolute top-0 left-0 z-[0]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Content - above video */}
      <div className="relative z-[10]">
        <SkillText />
      </div>

      <div className="relative z-[10] flex flex-col items-center gap-4 mt-6 w-full px-4">
        <SkillCategory
          title="Programming Languages"
          skills={SKILL_DATA}
          startIndex={0}
        />
        <SkillCategory
          title="Backend & Cloud"
          skills={BACKEND_SKILL}
          startIndex={SKILL_DATA.length}
        />
        <SkillCategory
          title="Frontend & ML"
          skills={FRONTEND_SKILL}
          startIndex={SKILL_DATA.length + BACKEND_SKILL.length}
        />
        <SkillCategory
          title="Databases & Tools"
          skills={FULLSTACK_SKILL}
          startIndex={
            SKILL_DATA.length + BACKEND_SKILL.length + FRONTEND_SKILL.length
          }
        />
      </div>
    </section>
  );
};
