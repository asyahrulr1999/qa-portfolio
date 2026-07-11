import Link from "next/link";
import { Github, Linkedin, Mail, TerminalSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navItems } from "@/lib/data";

const socials = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Mail, href: siteConfig.links.email, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-display font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <TerminalSquare className="h-4 w-4" />
              </span>
              {siteConfig.name}
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              {siteConfig.role} building reliable, well-tested software for
              healthcare and high-scale platforms.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-display text-sm font-semibold">Navigate</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-display text-sm font-semibold">Get in touch</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={siteConfig.links.email} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">
            Built with Next.js 15 · React 19 · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
