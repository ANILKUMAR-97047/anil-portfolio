"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const techStack = [
  "NEXT.JS",
  "REACT.JS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "NODE.JS",
  "NEST.JS",
  "EXPRESS.JS",
  "MYSQL",
  "MONGO DB",
  "JWT",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-0 pt-20"
      aria-label="Introduction"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Cyan glow orb */}
        <div className="absolute top-1/3 left-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 right-0 h-[220px] w-[220px] rounded-full bg-accent/[0.04] blur-[80px] sm:right-1/4 sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium text-accent tracking-wide">
            Open to opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-full text-[1.55rem] font-bold leading-[1.12] tracking-tight min-[370px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m Anil Kumar.
          <br />
          <span className="whitespace-nowrap bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent">
            Full Stack Developer.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-5 max-w-[20rem] text-sm leading-relaxed text-text-secondary sm:mt-6 sm:max-w-2xl sm:text-lg"
        >
          I build robust backend systems and clean, responsive interfaces — from
          REST APIs to pixel-accurate UI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4"
        >
          {/* TODO: Replace /resume.pdf with your actual resume file in /public/resume.pdf */}
          <a
            href="/resume.pdf"
            download="Anil_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0a0a0f] transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97] sm:px-6 sm:py-3"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.06] hover:text-accent active:scale-[0.97] sm:px-6 sm:py-3"
          >
            <Mail size={16} />
            Get in Touch
          </a>
        </motion.div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.10 }}
          className="mt-16 overflow-hidden sm:mt-20"
        >
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute bottom-0 left-0 top-0 z-10 w-10 bg-gradient-to-r from-[#0a0a0f] to-transparent sm:w-24" />
            <div className="absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-[#0a0a0f] to-transparent sm:w-24" />

            <div className="flex w-max whitespace-nowrap">
              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="flex shrink-0 animate-marquee items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
                  aria-hidden={group === 1}
                >
                  {techStack.map((tech) => (
                    <span
                      key={`${group}-${tech}`}
                      className="inline-flex items-center gap-8 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-text-tertiary sm:gap-12 sm:tracking-[0.2em]"
                    >
                      {tech}
                      <span className="text-accent/40">|</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
