"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock,
  FileCode2,
  FolderTree,
  GitBranch,
  Image as ImageIcon,
  Layers,
  MousePointerClick,
  PlayCircle,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { WindowFrame } from "@/components/shared/window-frame";
import { CodeBlock } from "@/components/shared/code-block";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ---- code samples as tokens ---- */
const featureFile: Parameters<typeof CodeBlock>[0]["lines"] = [
  [{ text: "Feature:", type: "keyword" }, { text: " Edit Rekam Medis — Ringkasan Pasien Pulang", type: "plain" }],
  [],
  [{ text: "  Background:", type: "keyword" }],
  [{ text: "    Given", type: "fn" }, { text: " a QA user is logged in to Hospita", type: "string" }],
  [{ text: "    And", type: "fn" }, { text: " a patient with an active visit exists", type: "string" }],
  [],
  [{ text: "  @rawat-jalan @regression", type: "comment" }],
  [{ text: "  Scenario:", type: "keyword" }, { text: " Save a valid discharge summary", type: "plain" }],
  [{ text: "    When", type: "fn" }, { text: ' I open "Edit Rekam Medis"', type: "string" }],
  [{ text: "    And", type: "fn" }, { text: " I fill the discharge summary fields", type: "string" }],
  [{ text: "    And", type: "fn" }, { text: ' I click "Simpan"', type: "string" }],
  [{ text: "    Then", type: "success" }, { text: " the summary is saved successfully", type: "string" }],
  [{ text: "    And", type: "success" }, { text: " a success notification is shown", type: "string" }],
];

const pageObject: Parameters<typeof CodeBlock>[0]["lines"] = [
  [{ text: "import", type: "keyword" }, { text: " { Page, Locator } ", type: "plain" }, { text: "from", type: "keyword" }, { text: " '@playwright/test';", type: "string" }],
  [],
  [{ text: "export class", type: "keyword" }, { text: " ", type: "plain" }, { text: "MedicalRecordPage", type: "fn" }, { text: " {", type: "plain" }],
  [{ text: "  readonly", type: "keyword" }, { text: " page: Page;", type: "plain" }],
  [{ text: "  readonly", type: "keyword" }, { text: " saveButton: Locator;", type: "plain" }],
  [],
  [{ text: "  constructor", type: "fn" }, { text: "(page: Page) {", type: "plain" }],
  [{ text: "    this", type: "keyword" }, { text: ".page = page;", type: "plain" }],
  [{ text: "    this", type: "keyword" }, { text: ".saveButton = page.", type: "plain" }, { text: "getByTestId", type: "fn" }, { text: "(", type: "plain" }, { text: "'rekam-medis.simpan.button'", type: "string" }, { text: ");", type: "plain" }],
  [{ text: "  }", type: "plain" }],
  [],
  [{ text: "  async", type: "keyword" }, { text: " ", type: "plain" }, { text: "saveSummary", type: "fn" }, { text: "() {", type: "plain" }],
  [{ text: "    await this", type: "keyword" }, { text: ".saveButton.", type: "plain" }, { text: "click", type: "fn" }, { text: "();", type: "plain" }],
  [{ text: "  }", type: "plain" }],
  [{ text: "}", type: "plain" }],
];

const stepDef: Parameters<typeof CodeBlock>[0]["lines"] = [
  [{ text: "import", type: "keyword" }, { text: " { Given, When, Then } ", type: "plain" }, { text: "from", type: "keyword" }, { text: " '@cucumber/cucumber';", type: "string" }],
  [{ text: "import", type: "keyword" }, { text: " { expect } ", type: "plain" }, { text: "from", type: "keyword" }, { text: " '@playwright/test';", type: "string" }],
  [],
  [{ text: "When", type: "fn" }, { text: "('I click \"Simpan\"', ", type: "string" }, { text: "async function", type: "keyword" }, { text: " () {", type: "plain" }],
  [{ text: "  await this", type: "keyword" }, { text: ".medicalRecordPage.", type: "plain" }, { text: "saveSummary", type: "fn" }, { text: "();", type: "plain" }],
  [{ text: "});", type: "plain" }],
  [],
  [{ text: "Then", type: "success" }, { text: "('the summary is saved successfully', ", type: "string" }, { text: "async function", type: "keyword" }, { text: " () {", type: "plain" }],
  [{ text: "  await", type: "keyword" }, { text: " ", type: "plain" }, { text: "expect", type: "fn" }, { text: "(this.toast).", type: "plain" }, { text: "toBeVisible", type: "fn" }, { text: "();", type: "plain" }],
  [{ text: "});", type: "plain" }],
];

const pipeline: Parameters<typeof CodeBlock>[0]["lines"] = [
  [{ text: "# Jenkins pipeline (declarative)", type: "comment" }],
  [{ text: "pipeline", type: "keyword" }, { text: " {", type: "plain" }],
  [{ text: "  agent", type: "prop" }, { text: " { docker { image ", type: "plain" }, { text: "'mcr.microsoft.com/playwright'", type: "string" }, { text: " } }", type: "plain" }],
  [{ text: "  stages", type: "prop" }, { text: " {", type: "plain" }],
  [{ text: "    stage", type: "fn" }, { text: "('Install')  { steps { sh ", type: "plain" }, { text: "'npm ci'", type: "string" }, { text: " } }", type: "plain" }],
  [{ text: "    stage", type: "fn" }, { text: "('Test')     { steps { sh ", type: "plain" }, { text: "'npm run test:bdd'", type: "string" }, { text: " } }", type: "plain" }],
  [{ text: "    stage", type: "fn" }, { text: "('Report')   { steps { sh ", type: "plain" }, { text: "'npm run report'", type: "string" }, { text: " } }", type: "plain" }],
  [{ text: "  }", type: "plain" }],
  [{ text: "}", type: "plain" }],
];

const folderTree = [
  { depth: 0, name: "aido-automation/", type: "folder" },
  { depth: 1, name: "features/", type: "folder" },
  { depth: 2, name: "rekam-medis.feature", type: "feature" },
  { depth: 2, name: "eklaim.feature", type: "feature" },
  { depth: 1, name: "pages/", type: "folder" },
  { depth: 2, name: "MedicalRecordPage.ts", type: "ts" },
  { depth: 2, name: "LoginPage.ts", type: "ts" },
  { depth: 1, name: "steps/", type: "folder" },
  { depth: 2, name: "rekam-medis.steps.ts", type: "ts" },
  { depth: 1, name: "support/", type: "folder" },
  { depth: 2, name: "world.ts", type: "ts" },
  { depth: 2, name: "hooks.ts", type: "ts" },
  { depth: 1, name: "reports/", type: "folder" },
  { depth: 1, name: "playwright.config.ts", type: "ts" },
  { depth: 1, name: "Jenkinsfile", type: "file" },
];

const reportRows = [
  { name: "rawat-jalan · edit rekam medis", status: "pass", time: "1.2s" },
  { name: "gawat-darurat · discharge summary", status: "pass", time: "0.9s" },
  { name: "rawat-inap · settlement piutang", status: "pass", time: "1.6s" },
  { name: "eklaim · simpan data klaim", status: "pass", time: "1.1s" },
];

export function AutomationShowcase() {
  return (
    <div className="container space-y-20 py-16">
      {/* Framework overview */}
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Layers, label: "Page Object Model", value: "Reusable, maintainable locators" },
            { icon: FileCode2, label: "Cucumber BDD", value: "Business-readable Gherkin specs" },
            { icon: GitBranch, label: "CI/CD", value: "Jenkins + Docker execution" },
          ].map((item) => (
            <Card key={item.label}>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>

      {/* BDD structure: tabs for feature / page object / step def */}
      <div>
        <h2 className="mb-6 font-display text-2xl font-bold">BDD structure</h2>
        <Reveal>
          <Tabs defaultValue="feature">
            <TabsList>
              <TabsTrigger value="feature">
                <FileCode2 className="h-4 w-4" /> Feature
              </TabsTrigger>
              <TabsTrigger value="page">
                <Layers className="h-4 w-4" /> Page Object
              </TabsTrigger>
              <TabsTrigger value="step">
                <MousePointerClick className="h-4 w-4" /> Step Definition
              </TabsTrigger>
            </TabsList>
            <TabsContent value="feature">
              <WindowFrame title="features/rekam-medis.feature">
                <CodeBlock lines={featureFile} />
              </WindowFrame>
            </TabsContent>
            <TabsContent value="page">
              <WindowFrame title="pages/MedicalRecordPage.ts">
                <CodeBlock lines={pageObject} />
              </WindowFrame>
            </TabsContent>
            <TabsContent value="step">
              <WindowFrame title="steps/rekam-medis.steps.ts">
                <CodeBlock lines={stepDef} />
              </WindowFrame>
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>

      {/* Folder structure + Execution report */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
            <FolderTree className="h-6 w-6 text-accent" /> Folder structure
          </h2>
          <Reveal>
            <WindowFrame title="aido-automation">
              <div className="p-4 font-mono text-[13px]">
                {folderTree.map((node, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 py-0.5 text-slate-300"
                    style={{ paddingLeft: `${node.depth * 18}px` }}
                  >
                    {node.type === "folder" ? (
                      <span className="text-[#82aaff]">▸ {node.name}</span>
                    ) : (
                      <span
                        className={
                          node.type === "feature"
                            ? "text-[#c3e88d]"
                            : node.type === "ts"
                              ? "text-[#7fdbca]"
                              : "text-slate-400"
                        }
                      >
                        {node.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </WindowFrame>
          </Reveal>
        </div>

        <div>
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
            <PlayCircle className="h-6 w-6 text-success" /> Execution report
          </h2>
          <Reveal>
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between border-b border-border bg-card/60 px-5 py-3">
                <span className="font-display text-sm font-semibold">
                  Playwright HTML Report
                </span>
                <Badge variant="success">164 / 164 passed</Badge>
              </div>
              <CardContent className="space-y-3 p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: "Passed", value: "164", tone: "text-success" },
                    { label: "Failed", value: "0", tone: "text-foreground" },
                    { label: "Duration", value: "48s", tone: "text-accent" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-border bg-secondary/40 p-3"
                    >
                      <div className={`font-display text-2xl font-bold ${s.tone}`}>
                        {s.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5 pt-1">
                  {reportRows.map((row, i) => (
                    <motion.div
                      key={row.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2 rounded-md bg-secondary/40 px-3 py-2 font-mono text-xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                      <span className="truncate">{row.name}</span>
                      <span className="ml-auto flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {row.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>

      {/* Trace viewer mock */}
      <div>
        <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
          <ImageIcon className="h-6 w-6 text-primary" /> Trace viewer
        </h2>
        <Reveal>
          <WindowFrame title="trace.playwright.dev — rekam-medis.feature" tone="browser">
            <div className="grid gap-0 md:grid-cols-[220px_1fr]">
              <div className="border-r border-white/10 p-3 font-mono text-[11px] text-slate-400">
                <p className="mb-2 uppercase tracking-widest text-slate-500">
                  Actions
                </p>
                {[
                  "page.goto",
                  "getByTestId.click",
                  "fill discharge form",
                  "click Simpan",
                  "expect toast visible",
                ].map((a, i) => (
                  <div
                    key={a}
                    className={`flex items-center gap-1.5 rounded px-2 py-1 ${
                      i === 3 ? "bg-primary/20 text-primary" : ""
                    }`}
                  >
                    <CircleDot className="h-3 w-3" /> {a}
                  </div>
                ))}
              </div>
              <div className="relative flex min-h-[220px] items-center justify-center bg-[#0f1629]">
                <div className="absolute left-3 top-3 font-mono text-[10px] text-slate-500">
                  DOM snapshot · before / action / after
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-success/15 text-success">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <p className="font-mono text-xs text-slate-400">
                    click <span className="text-[#c3e88d]">Simpan</span> → passed
                  </p>
                </div>
              </div>
            </div>
          </WindowFrame>
        </Reveal>
      </div>

      {/* Pipeline */}
      <div>
        <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
          <GitBranch className="h-6 w-6 text-accent" /> Pipeline
        </h2>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <WindowFrame title="Jenkinsfile" tone="terminal">
              <CodeBlock lines={pipeline} />
            </WindowFrame>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-3">
              {[
                { stage: "Checkout", note: "git clone aido-automation" },
                { stage: "Install", note: "npm ci · Docker container" },
                { stage: "Test", note: "Playwright + Cucumber BDD" },
                { stage: "Report", note: "HTML report + video artifacts" },
                { stage: "Notify", note: "Google Chat status update" },
              ].map((step, i, arr) => (
                <div key={step.stage} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    {i < arr.length - 1 ? (
                      <span className="h-6 w-px bg-border" />
                    ) : null}
                  </div>
                  <div className="pb-2">
                    <p className="font-display text-sm font-semibold">
                      {step.stage}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {step.note}
                    </p>
                  </div>
                  <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
