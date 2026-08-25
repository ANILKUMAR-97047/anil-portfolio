"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const techStack = [
  "NODE.JS",
  "NESTJS",
  "REACT",
  "MYSQL",
  "JWT",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
        {/* Secondary glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 mb-8"
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
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Hi, I&apos;m Anil Kumar.
          <br />
          <span className="bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent">
            Full Stack Developer.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          I build robust backend systems and clean, responsive interfaces — from
          REST APIs to pixel-accurate UI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* TODO: Replace /resume.pdf with your actual resume file in /public/resume.pdf */}
          <a
            href="/resume.pdf"
            download="Anil_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97]"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.06] hover:text-accent active:scale-[0.97]"
          >
            <Mail size={16} />
            Get in Touch
          </a>
        </motion.div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 overflow-hidden"
        >
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack, ...techStack, ...techStack].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="mx-6 text-xs font-mono font-semibold tracking-[0.2em] text-text-tertiary uppercase"
                  >
                    {tech}
                    <span className="ml-6 text-accent/40">|</span>
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
