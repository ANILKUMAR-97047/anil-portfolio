"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Send, Mail, Loader2, CheckCircle, Copy, Check, MapPin, ArrowUpRight } from "lucide-react";
import toast from "react-hot-toast";

/* Brand icons removed from lucide-react — using inline SVGs */
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    label: "GitHub",
    handle: "@ANILKUMAR-97047",
    href: "https://github.com/ANILKUMAR-97047",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    handle: "anil-kumar-marapatla",
    href: "https://linkedin.com/in/anil-kumar-marapatla-0414b0281",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    handle: "mak97047@gmail.com",
    href: "mailto:mak97047@gmail.com",
    icon: Mail,
  },
];

/*
 * ──────────────────────────────────────────────────────────
 *  HOW TO SET UP (one-time, 2 minutes):
 *
 *  1. Go to https://web3forms.com/
 *  2. Enter your email: mak97047@gmail.com
 *  3. Click "Create Access Key"
 *  4. Check your inbox and copy the access key
 *  5. Paste it below replacing "YOUR_ACCESS_KEY_HERE"
 *
 *  That's it! You'll receive beautifully formatted emails
 *  every time someone submits the contact form.
 * ──────────────────────────────────────────────────────────
 */
const WEB3FORMS_ACCESS_KEY = "7d881505-5e3b-4ad2-8b5a-27282315a05d"

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mak97047@gmail.com");
      setCopied(true);
      toast.success("Email copied to clipboard!", {
        style: {
          background: "#0f0f1a",
          color: "#e4e4e7",
          border: "1px solid rgba(34, 211, 238, 0.2)",
        },
        iconTheme: { primary: "#22d3ee", secondary: "#0f0f1a" },
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Could not copy email.");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `🚀 New Portfolio Contact from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.custom(
          (t) => (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={`${t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full pointer-events-auto rounded-xl border border-accent/20 bg-[#0f0f1a] shadow-2xl shadow-accent/10 overflow-hidden`}
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <CheckCircle size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">
                      Message sent successfully!
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Thanks {formData.name}, I&apos;ll get back to you as soon as
                      possible.
                    </p>
                  </div>
                </div>
              </div>
              {/* Accent bottom bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
            </motion.div>
          ),
          { duration: 4000, position: "top-right" }
        );

        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch {
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#1a1a2e",
          color: "#e4e4e7",
          border: "1px solid rgba(255,255,255,0.06)",
        },
        iconTheme: { primary: "#ef4444", secondary: "#1a1a2e" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[360px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[90px] pointer-events-none sm:h-[400px] sm:w-[600px] sm:blur-[120px]" />

      <div ref={ref} className="relative mx-auto w-[90%] max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 mb-4">
            <span className="text-xs font-medium text-accent tracking-wide">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              sharp
            </span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind, an open role, or just want to connect? Send
            a message below or reach out via social links.
          </p>
        </motion.div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 rounded-xl border border-card-border bg-card-bg p-5 sm:p-6"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-card-border bg-[#0d1117]/70 px-4 py-3 text-sm text-foreground placeholder:text-text-tertiary outline-none transition-all hover:border-white/15 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 disabled:opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-card-border bg-[#0d1117]/70 px-4 py-3 text-sm text-foreground placeholder:text-text-tertiary outline-none transition-all hover:border-white/15 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                disabled={isSubmitting}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-card-border bg-[#0d1117]/70 px-4 py-3 text-sm text-foreground placeholder:text-text-tertiary outline-none transition-all hover:border-white/15 focus:border-accent/40 focus:ring-1 focus:ring-accent/20 disabled:opacity-50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-accent cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-bold text-foreground mb-6">
              Connect with me
            </h3>
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-card-border bg-card-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-accent/[0.04]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                      <social.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                        {social.label}
                      </div>
                      <div className="truncate text-xs text-text-secondary">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-text-tertiary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </a>
              ))}

              <div className="flex items-center justify-between gap-4 rounded-xl border border-card-border bg-card-bg p-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">
                      Location
                    </div>
                    <div className="truncate text-xs text-text-secondary">
                      Hyderabad, Telangana, India
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-xs font-medium text-accent transition-all hover:border-accent/40 hover:bg-accent/15 cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? "Copied" : "Copy Email"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
