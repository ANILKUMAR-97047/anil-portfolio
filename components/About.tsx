"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "8+", label: "Live Platforms Shipped" },
  { value: "4", label: "Companies Worked With" },
  { value: "India", label: "Based in Hyderabad" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto w-[90%] max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-accent tracking-wide">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Building systems{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              that perform
            </span>
          </h2>
          <div className="section-heading-line" />
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              I&apos;m a Full Stack Developer based in Hyderabad, India, with
              professional experience since October 2024. I&apos;ve worked
              across four companies — from an on-site internship to full-time
              roles — shipping 8+ live platforms for clients in fintech,
              insurance, e-commerce, and education.
            </p>
            <p className="mt-5 text-text-secondary leading-relaxed text-base sm:text-lg">
              I specialize in NestJS and Next.js, designing robust backend
              architectures with PostgreSQL, MongoDB, and Redis, and delivering
              polished front-end interfaces with Tailwind CSS and GSAP — always
              end-to-end, always production-ready.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group rounded-xl border border-card-border bg-card-bg p-5 transition-all duration-300 hover:border-accent/20 hover:bg-accent/[0.03]"
              >
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
