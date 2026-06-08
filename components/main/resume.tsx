"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const TIMELINE_DATA = [
  {
    type: "experience" as const,
    title: "Backend Developer",
    organization: "Yaseer Innovative Software Pvt. Ltd",
    period: "Professional Experience",
    description: [
      "Engineered scalable Node.js & PostgreSQL backend handling 10,000+ records with Redis caching — 40% fewer DB queries, 200ms latency cut.",
      "Deployed WebSocket architecture for real-time chat & notifications supporting 1,000+ concurrent users.",
      "Integrated Stripe, SendGrid & AWS S3 via crypto-signed RESTful APIs with 0% transaction spoofing.",
      "Built an AI chatbot using LangChain & OpenAI, reducing Tier-1 ticket resolution by 35%.",
    ],
    tags: ["Node.js", "PostgreSQL", "Redis", "WebSocket", "LangChain", "AWS"],
  },
  {
    type: "education" as const,
    title: "B.Tech in Information Technology",
    organization: "IIIT Bhopal",
    period: "Sep 2023 – May 2027",
    description: [
      "Relevant Coursework: DSA, DBMS, OOP, Computer Networks, OS, Software Engineering",
    ],
    tags: ["DSA", "DBMS", "OOP", "Networks", "OS"],
  },
  {
    type: "leadership" as const,
    title: "Team Lead — Hack-O-Sprint 2025",
    organization: "Inter College Hackathon",
    period: "Sept 2025",
    description: [
      "Led 6-member team to build Ocean Hazard Detection System — Top 5 of 70+ teams.",
      "Managed Agile cycle with 100+ tasks, CI/CD via GitHub Actions.",
      "Delivered high-impact tech presentation, received special commendation for UI/UX.",
    ],
    tags: ["Leadership", "Agile", "CI/CD", "GitHub Actions"],
  },
  {
    type: "award" as const,
    title: "Smart India Hackathon 2024",
    organization: "Internal Winner",
    period: "2024",
    description: [
      "Developed an AI-driven disaster management portal for urban safety.",
    ],
    tags: ["AI", "Hackathon", "Disaster Management"],
  },
  {
    type: "leadership" as const,
    title: "Logistics Coordinator",
    organization: "IIIT Bhopal Convocation 2025",
    period: "Feb 2025",
    description: [
      "Orchestrated logistics for 750+ attendees, coordinating with 12+ vendors.",
      "Resolved real-time scheduling conflicts — 100% event uptime, zero delays.",
    ],
    tags: ["Event Management", "Logistics", "Coordination"],
  },
];

const typeColors = {
  experience: "from-purple-500 to-violet-600",
  education: "from-cyan-400 to-blue-500",
  leadership: "from-emerald-400 to-teal-500",
  award: "from-amber-400 to-orange-500",
};

const typeIcons = {
  experience: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  education: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  leadership: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  award: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

export const Resume = () => {
  return (
    <section
      id="resume"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-20"
    >
      {/* Header */}
      <div className="w-full h-auto flex flex-col items-center justify-center mb-16">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            My Journey
          </h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-4"
        >
          Resume
        </motion.h2>

        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-4 mt-2"
        >
          <a
            href="https://drive.google.com/file/d/1zWKMxGEVbXMU5CGSWTf3KAqcEbmy1uTx/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:shadow-[0_0_25px_rgba(112,66,248,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Full Resume
          </a>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-[800px]">
        {/* Timeline line */}
        <div className="absolute left-[20px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30" />

        {TIMELINE_DATA.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-[18px] h-[18px] rounded-full bg-[#030014] border-2 border-purple-500 z-10 shadow-[0_0_10px_rgba(112,66,248,0.5)]">
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
            </div>

            {/* Content */}
            <div
              className={`ml-12 md:ml-0 md:w-[calc(50%-30px)] ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}
            >
              <div className="glass-card p-6 rounded-xl group hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(112,66,248,0.15)]">
                {/* Type badge + period */}
                <div
                  className={`flex items-center gap-2 mb-3 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${typeColors[item.type]} text-white`}
                  >
                    {typeIcons[item.type]}
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500">{item.period}</span>
                </div>

                {/* Title & org */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-purple-300 text-sm font-medium mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                <ul
                  className={`space-y-1.5 ${
                    index % 2 === 0 ? "md:text-left" : ""
                  }`}
                >
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-purple-400 mt-1.5 flex-shrink-0">
                        ▹
                      </span>
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div
                  className={`flex flex-wrap gap-2 mt-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full border border-[#7042f88b] text-gray-300 hover:text-purple-300 hover:border-purple-500/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
