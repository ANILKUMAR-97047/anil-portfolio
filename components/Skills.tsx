"use client";

import { motion, useInView } from "framer-motion";
import { Code2, Database, Layers, ServerCog, ShieldCheck, Wrench } from "lucide-react";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "from-cyan-300/20 to-emerald-300/10",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "GSAP", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    accent: "from-sky-300/20 to-cyan-300/10",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "Strapi.js"],
  },
  {
    title: "Data & Cloud",
    icon: Database,
    accent: "from-teal-300/20 to-blue-300/10",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Schema Design"],
  },
  {
    title: "Architecture & APIs",
    icon: Layers,
    accent: "from-cyan-300/20 to-sky-300/10",
    skills: ["Microservices", "Socket.io", "Redis Caching", "Swagger / OpenAPI", "System Design"],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    accent: "from-emerald-300/20 to-cyan-300/10",
    skills: ["JWT Authentication", "Protected Routes", "API Authorization"],
  },
  {
    title: "DevOps & Cloud",
    icon: Wrench,
    accent: "from-zinc-200/15 to-cyan-300/10",
    skills: ["AWS", "Vercel", "Netlify", "Docker", "Git", "GitHub", "Postman", "Bootstrap"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto w-[90%] max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5">
            <span className="text-xs font-medium tracking-wide text-accent">
              Skills & Technologies
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Tools I{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              work with
            </span>
          </h2>
          <div className="section-heading-line" />
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-white/[0.045]"
            >
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${group.accent} opacity-60 transition-opacity group-hover:opacity-90`} />
              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/15">
                  <group.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-foreground">{group.title}</h3>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.06] bg-[#0a0a0f]/55 px-3 py-1 text-xs font-medium text-text-secondary transition-colors group-hover:border-accent/15 group-hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}