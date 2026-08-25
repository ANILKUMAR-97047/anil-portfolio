"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Craftnotion Pvt. Ltd",
    location: "Hyderabad, Telangana",
    period: "Jun 2025 – Dec 2025",
    bullets: [
      "Developed and maintained RESTful APIs using Node.js and NestJS",
      "Designed and optimized MySQL database schemas and queries",
      "Worked on Strapi CMS projects for content management and API customization",
      "Implemented authentication and authorization using JWT",
      "Integrated backend APIs with frontend applications",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-accent tracking-wide">
              Work Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Where I&apos;ve been{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              shipping code
            </span>
          </h2>
          <div className="section-heading-line" />
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 relative">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative pb-12 pl-6 last:pb-0 sm:pl-8"
            >
              {/* Timeline dot & line */}
              <div className="absolute left-0 top-2 flex flex-col items-center">
                <div className="relative z-10 h-4 w-4 rounded-full border-2 border-accent bg-[#0a0a0f]">
                  <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                </div>
                {i < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Card */}
              <div className="rounded-xl border border-card-border bg-card-bg p-6 sm:p-8 transition-all duration-300 hover:border-accent/15 hover:bg-white/[0.04]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="flex items-start gap-2 text-lg font-bold text-foreground sm:text-xl">
                      <Briefcase size={18} className="text-accent shrink-0" />
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary">
                      <span className="font-medium text-foreground/80">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 break-words">
                        <MapPin size={13} className="text-accent/60" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-xs font-medium text-accent whitespace-nowrap">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
