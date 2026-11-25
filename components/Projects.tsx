"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, Activity, Server, Compass, Zap, ShieldCheck, GraduationCap, Landmark, Sparkles, Building2 } from "lucide-react";

const projects = [
  {
    title: "Kosha",
    subtitle: "Intelligent corporate lending & MSME loans",
    description:
      "Intelligent corporate lending platform streamlining MSME loan origination between businesses, banks, NBFCs, and valuation agencies from application to disbursement.",
    tech: ["Next.js", "NestJS", "Node.js", "Tailwind CSS", "Supabase", "TypeScript"],
    icon: Landmark,
    liveUrl: "https://banking-application-eta.vercel.app/",
  },
  {
    title: "Yvity",
    subtitle: "Insurance policy & advisor platform",
    description:
      "Full-stack insurance management platform connecting clients and advisors, built with Next.js, Tailwind CSS, and Supabase for seamless policy tracking and database operations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    icon: ShieldCheck,
    liveUrl: "https://www.yvity.com/",
  },
  {
    title: "Career Bridge IT",
    subtitle: "IT training institute & course portal",
    description:
      "Full-stack web application for an IT training institute, engineered with interactive course interfaces, student inquiry workflows, and backend endpoints for curriculum management.",
    tech: ["Next.js", "React.js", "Node.js", "Tailwind CSS", "MongoDB", "REST APIs"],
    icon: GraduationCap,
    liveUrl: "https://www.careerbridgeit.com/",
  },
  {
    title: "Tirupathi Electrodes",
    subtitle: "NestJS backend & product catalog",
    description:
      "Engineered backend services and RESTful APIs using NestJS and Node.js for Tirupathi Electrodes, powering industrial product catalogs, technical specifications, and inquiry handling.",
    tech: ["NestJS", "Node.js", "TypeScript", "REST APIs", "MySQL"],
    icon: Zap,
    liveUrl: "https://tirupathielectrodes.com/",
  },
  {
    title: "ToonPandas",
    subtitle: "Complete backend & CMS",
    description:
      "Designed and engineered the complete backend architecture for ToonPandas using Strapi.js and Node.js, featuring automated content delivery, custom REST APIs, and database schemas.",
    tech: ["Strapi.js", "Node.js", "MySQL", "REST APIs", "JWT"],
    icon: Server,
    liveUrl: "https://toonpandas.com/",
  },
  {
    title: "DJ Tours & Travels",
    subtitle: "Travel booking & backend CMS",
    description:
      "Engineered the backend services and CMS integration for DJ Tours & Travels using Strapi.js and Node.js, managing package listings, booking workflows, and inquiry endpoints.",
    tech: ["Strapi.js", "Node.js", "MySQL", "REST APIs", "JWT"],
    icon: Compass,
    liveUrl: "https://djtoursandtravels.com/",
  },
  {
    title: "Astroping",
    subtitle: "Admin dashboard & platform",
    description:
      "Full-stack administrative dashboard and platform management system built with React and Node.js for real-time tracking, administration, and database operations.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS", "REST APIs"],
    icon: Activity,
    liveUrl: "https://astroping.com/",
  },
  {
    title: "Asian Film Academy Website",
    subtitle: "Responsive academy site",
    description:
      "Responsive React and Tailwind website with reusable components, structured layouts, and clean frontend architecture.",
    tech: ["React.js", "Tailwind CSS", "HTML", "CSS"],
    icon: Layers,
    liveUrl: "https://asian-film-academy.netlify.app/",
  },
  {
    title: "AI Resume Analyzer",
    subtitle: "AI-powered resume insights & scoring",
    description:
      "Upload a PDF or paste your resume to receive instant AI insights covering strengths, weaknesses, missing skills, and actionable suggestions to improve.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "PDF Parsing"],
    icon: Sparkles,
    liveUrl: "https://anil-ai-resume-analyzer.vercel.app/",
  },
  {
    title: "Siri Windows",
    subtitle: "UPVC & Aluminium showcase + owner admin",
    description:
      "Business showcase website for a UPVC and Aluminium windows and doors manufacturer, featuring customer inquiry workflows and a dedicated owner admin dashboard to manage operations.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Admin Dashboard", "Vercel"],
    icon: Building2,
    liveUrl: "https://siri-windows.vercel.app/",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto w-[90%] max-w-7xl px-5 sm:px-6">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.08 }}
              className="group relative flex min-h-full flex-col overflow-hidden rounded-xl border border-card-border bg-card-bg transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.045] hover:shadow-xl hover:shadow-accent/[0.06]"
            >
              <div className="relative h-36 overflow-hidden border-b border-white/[0.06] bg-[#0d1117]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),transparent_48%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:auto,28px_28px,28px_28px]" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                  <project.icon size={24} />
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3 rounded-lg border border-white/[0.08] bg-[#0a0a0f]/75 px-3 py-2 text-xs font-mono text-text-secondary backdrop-blur">
                  <span className="truncate">{project.subtitle}</span>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 text-accent transition-colors hover:text-cyan-300"
                    >
                      <span>live</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="break-words text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <div className="flex shrink-0 items-center">
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
                  )}
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