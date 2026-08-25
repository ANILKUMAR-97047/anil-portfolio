"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "JavaScript",
  "Python",
  "Node.js",
  "NestJS",
  "Express.js",
  "Strapi",
  "MySQL",
  "SQL",
  "MongoDB",
  "React.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "REST APIs",
  "JWT Authentication",
  "Postman",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-accent tracking-wide">
              Skills & Technologies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Tools I{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              work with
            </span>
          </h2>
          <div className="section-heading-line" />
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.03 }}
              className="inline-flex items-center rounded-full border border-card-border bg-card-bg px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.06] hover:text-accent cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
