import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/data/site";

const nav = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
        <Link to="/" className="label-caps text-foreground" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="label-caps text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="label-caps md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex h-[calc(100vh-5rem)] flex-col gap-8 bg-background px-6 pt-10 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-4xl">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-32 flex max-w-[1600px] flex-col justify-between gap-4 border-t px-6 py-10 text-muted-foreground md:flex-row md:px-12">
      <span className="label-caps">© {new Date().getFullYear()} {site.name}</span>
      <a href={`mailto:${site.contact.email}`} className="label-caps hover:text-foreground">
        {site.contact.email}
      </a>
    </footer>
  );
}
