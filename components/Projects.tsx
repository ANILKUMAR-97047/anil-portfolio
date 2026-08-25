"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, LockKeyhole, ListChecks } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: "Jobby App",
    subtitle: "Authenticated job search",
    description:
      "Job search application with JWT authentication, protected routes, REST API integration, and persistent login state.",
    tech: ["React.js", "JavaScript", "Bootstrap", "REST APIs", "JWT"],
    icon: LockKeyhole,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Asian Film Academy Website",
    subtitle: "Responsive academy site",
    description:
      "Responsive React and Tailwind website with reusable components, structured layouts, and clean frontend architecture.",
    tech: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    icon: Layers,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Todos Application",
    subtitle: "Persistent task manager",
    description:
      "Todo application with complete CRUD interactions and browser local storage persistence for returning users.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: ListChecks,
    liveUrl: "#",
    repoUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-[90%] px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5">
            <span className="text-xs font-medium tracking-wide text-accent">
              Projects
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              built
            </span>
          </h2>
          <div className="section-heading-line" />
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 + i * 0.1 }}
              className="group relative flex min-h-full flex-col overflow-hidden rounded-xl border border-card-border bg-card-bg transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-white/[0.045] hover:shadow-xl hover:shadow-accent/[0.04]"
            >
              <div className="relative h-36 overflow-hidden border-b border-white/[0.06] bg-[#0d1117]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),transparent_48%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:auto,28px_28px,28px_28px]" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                  <project.icon size={24} />
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#0a0a0f]/70 px-3 py-2 text-xs font-mono text-text-secondary backdrop-blur">
                  <span>{project.subtitle}</span>
                  <span className="text-accent">preview</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="break-words text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-1.5 text-text-tertiary transition-all hover:bg-accent/10 hover:text-accent"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-1.5 text-text-tertiary transition-all hover:bg-accent/10 hover:text-accent"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/10 bg-accent/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-accent/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}