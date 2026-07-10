"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FolderGit2,
  Mail,
  MapPin,
} from "lucide-react";
import { headlineRoles } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typing } from "@/components/shared/typing";

const passingSpecs = [
  "outpatient · edit medical record",
  "emergency · discharge summary",
  "inpatient · settlement piutang",
  "api · SEP verification",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-28">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-0 top-40 h-[320px] w-[320px] rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="text-muted-foreground">Open to Senior QA roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 flex min-h-[2.5rem] items-center font-display text-2xl font-semibold sm:text-3xl"
          >
            <Typing words={headlineRoles} className="text-gradient" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            4+ years designing and automating reliable test suites with
            Playwright, Cucumber, API and performance testing — with deep focus
            on healthcare information systems where correctness is critical.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 flex items-center gap-4 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" />
              {siteConfig.location}
            </span>
            <Badge variant="success">ISTQB CTFL</Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg">
              <a href={siteConfig.resumePath} download>
                <Download /> Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">
                <FolderGit2 /> View Projects
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail /> Contact Me <ArrowRight />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right: signature — photo + passing report */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* photo */}
          <div className="relative mx-auto mb-[-3rem] h-40 w-40 sm:h-48 sm:w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-[3px] glow-primary">
              <div className="h-full w-full overflow-hidden rounded-full bg-card">
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  width={192}
                  height={192}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium shadow-lg">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Verified QA
            </div>
          </div>

          {/* report card */}
          <div className="glass rounded-2xl p-1.5 shadow-2xl shadow-black/30">
            <div className="rounded-xl bg-[#0b1120]/90 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2">playwright report</span>
                </div>
                <span className="rounded bg-success/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-success">
                  PASSED
                </span>
              </div>

              <div className="space-y-2 py-3 font-mono text-[12px]">
                {passingSpecs.map((spec, i) => (
                  <motion.div
                    key={spec}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success" />
                    <span className="truncate">{spec}</span>
                    <span className="ml-auto text-slate-500">
                      {(0.4 + i * 0.3).toFixed(1)}s
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-center font-mono">
                <div>
                  <div className="text-lg font-bold text-success">164</div>
                  <div className="text-[10px] text-slate-500">passed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-200">0</div>
                  <div className="text-[10px] text-slate-500">failed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-accent">100%</div>
                  <div className="text-[10px] text-slate-500">pass rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* floating gherkin chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -left-6 bottom-8 hidden rounded-lg border border-border bg-card px-3 py-2 font-mono text-[11px] shadow-xl sm:block"
          >
            <span className="text-[#c792ea]">Given</span> a valid patient
            <br />
            <span className="text-[#c792ea]">When</span> I edit the record
            <br />
            <span className="text-success">Then</span> it is saved ✓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
