import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>
      <div className="container">
        <Reveal>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {eyebrow}
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
