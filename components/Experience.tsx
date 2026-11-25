"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "HanviTec Solutions Pvt Ltd",
    location: "Hyderabad, Telangana, India",
    type: "Full-time · On-site",
    period: "Dec 2025 – Present",
    links: [
      {
        label: "View Kosha Platform",
        url: "https://banking-application-eta.vercel.app/",
      },
      {
        label: "View Yvity Platform",
        url: "https://www.yvity.com/",
      },
      {
        label: "View Career Bridge IT",
        url: "https://www.careerbridgeit.com/",
      },
    ],
    bullets: [
      "Architecting and delivering full-stack solutions end-to-end for production platforms including Kosha (intelligent corporate lending ecosystem for MSMEs, banks, and NBFCs), Yvity, and Career Bridge IT.",
      "Designing and managing high-performance databases with PostgreSQL, Supabase, and MongoDB.",
      "Implementing real-time communication systems and high-throughput caching strategies with Redis.",
      "Documenting modular REST APIs with Swagger/OpenAPI and containerizing microservices using Docker for seamless deployments.",
      "Building responsive interfaces with Tailwind CSS and creating fluid, engaging animations using GSAP.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Socket.io",
      "Supabase",
      "Swagger API",
      "GSAP",
    ],
  },
  {
    role: "Jr. Backend Developer",
    company: "Craftnotion",
    location: "Hyderabad, Telangana, India",
    type: "Full-time · On-site",
    period: "Jun 2025 – Dec 2025",
    links: [
      {
        label: "View Tirupathi Electrodes",
        url: "https://tirupathielectrodes.com/",
      },
      {
        label: "View ToonPandas Platform",
        url: "https://toonpandas.com/",
      },
      {
        label: "View DJ Tours & Travels",
        url: "https://djtoursandtravels.com/",
      },
    ],
    bullets: [
      "Engineered backend services and RESTful APIs using NestJS and Node.js for Tirupathi Electrodes, powering product catalogs and inquiry pipelines.",
      "Engineered backend architectures and content management systems for production platforms including ToonPandas and DJ Tours & Travels using Strapi.js.",
      "Designed and optimized relational and NoSQL database schemas using MySQL and MongoDB for high-performance querying.",
      "Implemented Redis caching strategies to minimize database load and accelerate API response times.",
      "Collaborated on seamless API integration with React.js frontend interfaces and enforced secure JWT authentication.",
    ],
    skills: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Microservices",
      "MySQL",
      "MongoDB",
      "Redis",
      "Strapi.js",
      "Swagger API",
      "React.js",
    ],
  },
  {
    role: "Contract Web Developer",
    company: "Star Design Institute",
    location: "Remote",
    type: "Contract · Remote",
    period: "Dec 2024 – Jun 2025",
    link: {
      label: "View Asian Film Academy Site",
      url: "https://asian-film-academy.netlify.app/",
    },
    bullets: [
      "Engineered responsive web applications end-to-end, including the production website for Asian Film Academy.",
      "Collaborated closely with the institute's UI/UX designers to translate Figma design systems into pixel-perfect React and Next.js interfaces.",
      "Developed modular backend endpoints using Node.js for lead capture, student inquiries, and course information management.",
      "Structured clean styling architectures with Tailwind CSS, HTML, and modern CSS practices for optimal performance and cross-device responsiveness.",
    ],
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Credmarg",
    location: "Hyderabad, Telangana, India",
    type: "Internship · On-site",
    period: "Oct 2024 – Nov 2024",
    link: {
      label: "View Astroping Platform",
      url: "https://astroping.com/",
    },
    bullets: [
      "Contributed across frontend and backend development for the Astroping web platform admin dashboard.",
      "Engineered administrative dashboard features with React.js and custom CSS for monitoring and platform management.",
      "Implemented RESTful backend endpoints using Node.js and Express.js to process administrative actions and queries.",
      "Designed and maintained MongoDB collections and schemas to ensure efficient data persistence and fast retrieval.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
      "REST APIs",
      "JavaScript",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto w-[90%] max-w-7xl px-5 sm:px-6">
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
              <div className="absolute left-0 top-2 bottom-0 flex flex-col items-center">
                <div className="relative z-10 h-4 w-4 rounded-full border-2 border-accent bg-[#0a0a0f]">
                  {i === 0 && (
                    <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                  )}
                </div>
                {i < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Card */}
              <div className="rounded-xl border border-card-border bg-card-bg p-6 sm:p-8 transition-all duration-300 hover:border-accent/15 hover:bg-white/[0.04]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="flex items-start gap-2 text-lg font-bold text-foreground sm:text-xl">
                      <Briefcase size={18} className="mt-1 text-accent shrink-0" />
                      {exp.role}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-text-secondary">
                      <span className="font-medium text-foreground/80">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 break-words">
                        <MapPin size={13} className="text-accent/60" />
                        {exp.location}
                      </span>
                      {exp.type && (
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-text-secondary">
                          {exp.type}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-xs font-medium text-accent whitespace-nowrap self-start shrink-0">
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

                {(exp.links || exp.link) && (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {(exp.links ?? (exp.link ? [exp.link] : [])).map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1.5 text-xs font-medium text-accent transition-all hover:border-accent/40 hover:bg-accent/15"
                      >
                        <span>{item.label}</span>
                        <ExternalLink size={12} className="shrink-0" />
                      </a>
                    ))}
                  </div>
                )}

                {exp.skills && exp.skills.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-card-border/60">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-accent/15 bg-accent/[0.05] px-2.5 py-1 text-xs font-medium text-accent/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
