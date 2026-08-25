"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

/* Brand icon removed from lucide-react — using inline SVG */
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: "Jobby App",
    subtitle: "React.js",
    description:
      "Job search application with JWT authentication, protected routes, and REST API integration. Designed Login, Home, Jobs, and Job Details pages; persisted login state using local storage.",
    tech: ["React.js", "JavaScript", "Bootstrap", "REST APIs", "JWT"],
    // TODO: Replace "#" with the real project URL
    liveUrl: "#",
    // TODO: Replace "#" with the real GitHub repo URL
    repoUrl: "#",
  },
  {
    title: "Asian Film Academy Website",
    subtitle: "React.js",
    description:
      "Responsive website using React.js and Tailwind CSS with reusable components built using props and lists; frontend structured for future backend integration.",
    tech: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    // TODO: Replace "#" with the real project URL
    liveUrl: "#",
    // TODO: Replace "#" with the real GitHub repo URL
    repoUrl: "#",
  },
  {
    title: "Todos Application",
    subtitle: "JavaScript",
    description:
      "Persistent todo application with full CRUD operations and local storage support.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    // TODO: Replace "#" with the real project URL
    liveUrl: "#",
    // TODO: Replace "#" with the real GitHub repo URL
    repoUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-accent tracking-wide">
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              built
            </span>
          </h2>
          <div className="section-heading-line" />
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group relative flex flex-col rounded-xl border border-card-border bg-card-bg overflow-hidden transition-all duration-300 hover:border-accent/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-accent/[0.04]"
            >
              {/* Top accent bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-6">
                {/* Title row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="break-words text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <span className="text-xs text-text-tertiary font-medium">
                      {project.subtitle}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-all"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-tertiary hover:text-accent hover:bg-accent/10 transition-all"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/[0.06] border border-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent/80"
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
