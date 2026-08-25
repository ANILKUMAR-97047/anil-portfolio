"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -75% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMobileNavClick = (href: string) => {
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    setActiveSection(id);
    window.history.pushState(null, "", href);
    setMobileOpen(false);

    // Delay scroll so the menu exit animation doesn't block it
    setTimeout(() => {
      const headerOffset = 76;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 250);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-white/[0.08] bg-[#0a0a0f]/82 shadow-lg shadow-black/20 backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-[90%] items-center justify-between px-5 py-4 sm:px-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Anil<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.025] p-1 md:flex">
          {links.map((link) => {
            const active = activeSection === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${active
                    ? "text-accent"
                    : "text-text-secondary hover:text-foreground"
                    }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full border border-accent/20 bg-accent/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/resume.pdf"
          download="Anil_Kumar_Resume.pdf"
          className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-accent/30 hover:bg-accent/[0.08] hover:text-accent lg:inline-flex"
        >
          <Download size={15} />
          Resume
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="-mr-2 p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-white/[0.06] bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleMobileNavClick(link.href)}
                    className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${activeSection === link.href.replace("#", "")
                      ? "bg-accent/[0.08] text-accent"
                      : "text-text-secondary hover:bg-white/[0.03] hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}