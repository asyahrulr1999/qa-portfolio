"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've assured quality"
          description="Four years across healthcare information systems, AI health products, and large-scale e-commerce."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[340px_1fr]">
          {/* Timeline rail */}
          <Reveal direction="right">
            <ol className="relative space-y-2">
              <span className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
              {experiences.map((item, i) => (
                <li key={item.company}>
                  <button
                    onClick={() => setActive(i)}
                    className={cn(
                      "group relative flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all",
                      active === i
                        ? "border-primary/50 bg-primary/5"
                        : "border-transparent hover:border-border hover:bg-card/60"
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                        active === i
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-muted-foreground"
                      )}
                    >
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-2">
                        <span className="truncate font-display text-sm font-semibold">
                          {item.company}
                        </span>
                        {item.current ? (
                          <Badge variant="success" className="shrink-0 text-[10px]">
                            Now
                          </Badge>
                        ) : null}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {item.role}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-muted-foreground">
                        {item.period}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Detail panel */}
          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {exp.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-primary">
                      {exp.company}
                      <span className="text-muted-foreground">·</span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </p>
                  </div>
                  <Badge variant="outline" className="font-mono">
                    {exp.period}
                  </Badge>
                </div>

                <p className="mt-4 text-muted-foreground">{exp.summary}</p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Responsibilities
                    </p>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                      <Award className="h-4 w-4 text-success" />
                      Achievements
                    </p>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
