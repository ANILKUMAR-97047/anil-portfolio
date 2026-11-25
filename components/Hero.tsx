"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Server, Sparkles } from "lucide-react";

const techStack = [
  "NEXT.JS",
  "REACT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "NEST.JS",
  "POSTGRESQL",
  "MONGO DB",
  "REDIS",
  "DOCKER",
  "SOCKET.IO",
  "TAILWIND CSS",
];

const highlights = [
  { value: "REST", label: "API design" },
  { value: "JWT", label: "secure auth" },
  { value: "MySQL", label: "data layer" },
];

const codeLines = [
  "const developer = 'Anil Kumar';",
  "build(api).with(NestJS);",
  "ship(ui).with(React);",
  "optimize('performance');",
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden px-0 pt-24"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),transparent_28%,rgba(255,255,255,0.035)_55%,transparent_78%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0f] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[90%] items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(440px,520px)] lg:gap-10 xl:gap-14">
        <div className="text-center lg:text-left">
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
            <span className="text-xs font-medium tracking-wide text-accent">
              Open to opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-full text-[1.55rem] font-bold leading-[1.08] tracking-tight min-[370px]:text-3xl sm:text-5xl md:text-6xl lg:mx-0 lg:text-[4rem] xl:text-7xl"
          >
            Hi, I&apos;m Anil Kumar.
            <br />
            <span className="whitespace-nowrap bg-gradient-to-r from-accent via-cyan-200 to-accent bg-clip-text text-transparent">
              Full Stack Developer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mx-auto mt-5 max-w-[22rem] text-sm leading-relaxed text-text-secondary sm:mt-6 sm:max-w-2xl sm:text-lg lg:mx-0"
          >
            I build reliable backend systems, secure APIs, and polished React
            interfaces that feel fast, clear, and production-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start"
          >
            <a
              href="/resume.pdf"
              download="Anil_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0a0a0f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97] sm:px-6 sm:py-3"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/[0.06] hover:text-accent active:scale-[0.97] sm:px-6 sm:py-3"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-9 grid grid-cols-3 gap-3 sm:max-w-xl lg:mt-10"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-3 text-left"
              >
                <div className="text-sm font-bold text-foreground sm:text-base">
                  {item.value}
                </div>
                <div className="mt-1 text-[11px] leading-snug text-text-tertiary sm:text-xs">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="hidden justify-self-end lg:block lg:w-full lg:max-w-[520px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1117]/80 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs font-medium text-text-tertiary">portfolio.ts</span>
            </div>
            <div className="space-y-3 p-6 font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.42 + index * 0.12 }}
                  className="flex items-center gap-4"
                >
                  <span className="w-5 text-right text-text-tertiary">{index + 1}</span>
                  <span className="text-zinc-300">{line}</span>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 border-t border-white/[0.08]">
              <div className="border-r border-white/[0.08] p-5">
                <div className="flex items-center gap-2 text-xs font-medium text-accent">
                  <Server size={14} /> Backend focus
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  NestJS APIs, auth flows, and database-backed services.
                </p>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs font-medium text-accent">
                  <Sparkles size={14} /> UI polish
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Responsive React screens with calm interactions.
                </p>
              </div>
            </div>
            <a
              href="#projects"
              className="group flex items-center justify-between border-t border-white/[0.08] px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.03] hover:text-accent"
            >
              View selected projects
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="col-span-full overflow-hidden lg:mt-2"
        >
          <div className="relative">
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