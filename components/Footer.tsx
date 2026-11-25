const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            Anil<span className="text-accent">.</span>
          </a>
          <p className="mt-1 text-xs text-text-secondary">
            Anil Kumar &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-text-secondary transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-accent/30 hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
