"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const accentStyles: Record<Project["accent"], string> = {
  primary: "from-primary/20 to-primary/5 text-primary",
  success: "from-success/20 to-success/5 text-success",
  accent: "from-accent/20 to-accent/5 text-accent",
};

function ScreenshotMock({ project }: { project: Project }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-lg border border-border bg-[#0b1120]">
      {/* faux app chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[10px] text-slate-500">
          {project.category.toLowerCase().replace(/\s·\s/g, "/")}
        </span>
      </div>
      <div
        className={cn(
          "absolute inset-0 top-8 bg-gradient-to-br",
          accentStyles[project.accent]
        )}
      />
      <div className="relative flex h-[calc(100%-2rem)] items-center justify-center">
        <project.icon className={cn("h-14 w-14 opacity-80", accentStyles[project.accent].split(" ").pop())} />
      </div>
      {/* faux pass ticks */}
      <div className="absolute bottom-2 left-3 flex gap-1.5 font-mono text-[9px] text-slate-500">
        <span className="rounded bg-success/15 px-1.5 py-0.5 text-success">
          ✓ passing
        </span>
        <span className="rounded bg-white/5 px-1.5 py-0.5">screenshot</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Testing that ships with confidence"
          description="Selected automation and QA work across hospital information systems, finance, and integrations."
        />

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <CardContent className="space-y-4 p-5">
                  <ScreenshotMock project={project} />

                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br",
                        accentStyles[project.accent]
                      )}
                    >
                      <project.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1.5 text-[10px]">
                        {project.category}
                      </Badge>
                      <h3 className="font-display text-base font-semibold leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5">
                    {project.responsibilities.slice(0, 3).map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success/80" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-[10px]">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 border-t border-border pt-4">
                    {project.results.map((res) => (
                      <div key={res.label}>
                        <div className="font-display text-sm font-bold text-foreground">
                          {res.value}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
