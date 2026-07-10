import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
  ClipboardCheck,
  Code2,
  Database,
  FileCheck2,
  FlaskConical,
  Gauge,
  GitBranch,
  Globe,
  LayoutDashboard,
  ListChecks,
  Server,
  Stethoscope,
  Wrench,
} from "lucide-react";

/* --------------------------------------------------------------------------
 * NAVIGATION
 * ---------------------------------------------------------------------- */
export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Automation", href: "/automation" },
  { label: "API", href: "/api-testing" },
  { label: "Performance", href: "/performance" },
  { label: "Contact", href: "/#contact" },
] as const;

/* --------------------------------------------------------------------------
 * HERO
 * ---------------------------------------------------------------------- */
export const headlineRoles = [
  "Senior QA Engineer",
  "QA Automation Engineer",
  "Playwright Automation",
  "API & Performance Testing",
  "Healthcare Systems QA",
];

/* --------------------------------------------------------------------------
 * STATS (animated counters) — sourced from CV claims
 * ---------------------------------------------------------------------- */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years in QA", icon: ClipboardCheck },
  { value: 90, suffix: "%", label: "Test Efficiency Gained", icon: Gauge },
  { value: 100, suffix: "%", label: "Test Coverage Reached", icon: FileCheck2 },
  { value: 50, suffix: "+", label: "Perf Issues Caught", icon: FlaskConical },
];

/* --------------------------------------------------------------------------
 * ABOUT
 * ---------------------------------------------------------------------- */
export const aboutSummary =
  "Software Quality Assurance Engineer with 4+ years of experience across web and mobile applications, combining hands-on manual testing with scalable automation. I design and maintain automated test suites in JavaScript/TypeScript with Playwright and Cucumber BDD, and bring strong expertise in API testing, database validation, and performance testing.";

export const aboutDetail =
  "Comfortable working end-to-end across the SDLC/STLC in Agile/Scrum teams, I partner with developers, product managers, finance, and UI/UX to keep quality high and release cycles fast. My recent focus is healthcare information systems — where correctness, compliance, and reliability are non-negotiable — with a proven track record of improving test efficiency by 80–90% and reaching 100% test coverage.";

export const aboutHighlights = [
  {
    icon: Bot,
    title: "Automation-first",
    text: "Playwright + Cucumber BDD frameworks using the Page Object Model for scalable, reusable coverage.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare domain",
    text: "Deep QA experience on hospital information systems (SIMRS), EMR, finance & accounting modules.",
  },
  {
    icon: Server,
    title: "Full-stack testing",
    text: "API, database, load & performance testing alongside functional and regression coverage.",
  },
  {
    icon: GitBranch,
    title: "Agile & CI/CD",
    text: "Requirement review, risk analysis, and release validation embedded in Agile delivery.",
  },
];

/* --------------------------------------------------------------------------
 * SKILLS
 * ---------------------------------------------------------------------- */
export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Automation",
    icon: Bot,
    skills: [
      { name: "Playwright", level: 92 },
      { name: "Selenium", level: 80 },
      { name: "Katalon Studio", level: 85 },
      { name: "Cucumber (BDD)", level: 90 },
      { name: "Gherkin", level: 90 },
      { name: "Robot Framework", level: 72 },
    ],
  },
  {
    name: "Testing",
    icon: ListChecks,
    skills: [
      { name: "Functional & Regression", level: 93 },
      { name: "API Testing", level: 90 },
      { name: "Database Testing", level: 85 },
      { name: "Performance Testing", level: 82 },
      { name: "Smoke / Sanity / UAT", level: 90 },
      { name: "Exploratory Testing", level: 85 },
    ],
  },
  {
    name: "Programming",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 84 },
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 84 },
      { name: "ArangoDB", level: 70 },
      { name: "MongoDB", level: 68 },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Postman", level: 90 },
      { name: "JMeter", level: 82 },
      { name: "Jira", level: 90 },
      { name: "Git / Bitbucket", level: 84 },
      { name: "AIO Test / TestRail", level: 80 },
      { name: "Confluence", level: 80 },
    ],
  },
];

/* --------------------------------------------------------------------------
 * EXPERIENCE
 * ---------------------------------------------------------------------- */
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Aido Health Indonesia",
    location: "South Jakarta",
    role: "Quality Assurance Engineer",
    period: "Oct 2023 — Present",
    current: true,
    summary:
      "Own end-to-end quality for three healthcare products — Hospita (SIMRS with a dedicated Finance & Accounting module), Digita (pharmacy delivery), and Klinika (SIMRS) — combining automation, API, database, and performance testing.",
    responsibilities: [
      "Build and maintain automation suites in JavaScript with Playwright and Node.js, using Cucumber BDD and Gherkin for scalable, reusable scenarios.",
      "Design test strategies, test cases, and test plans with the QA team, aligned to Agile methodology.",
      "Perform API testing with Postman and validate PostgreSQL & MySQL databases for accuracy and synchronization.",
      "Run post-release and post-implementation testing to ensure product stability and smooth deployments.",
    ],
    achievements: [
      "Improved test coverage 70–80% while reducing manual testing effort.",
      "Reduced API defects by 80% through structured integration testing.",
      "Detected 50+ performance issues before production via load & stress testing.",
      "Reached 95% requirement coverage through disciplined requirement review.",
    ],
    tech: [
      "Playwright",
      "Cucumber",
      "Node.js",
      "Postman",
      "PostgreSQL",
      "MySQL",
      "JMeter",
      "Jira",
    ],
  },
  {
    company: "PT Pintar Data Group (Prixa.ai)",
    location: "Central Jakarta",
    role: "Quality Assurance Engineer",
    period: "Dec 2022 — Oct 2023",
    summary:
      "Delivered automation and full-spectrum testing for AI-driven health products, documenting complete test plans and driving regression stability across releases.",
    responsibilities: [
      "Developed automation scripts with Katalon Studio and Playwright to reduce manual effort.",
      "Validated PostgreSQL & MySQL databases (with Arango) for integrity and synchronization.",
      "Documented test plans and cases in AIO Test, targeting full functional and non-functional coverage.",
      "Executed Sanity, Smoke, Regression, and Exploratory testing across web and mobile.",
    ],
    achievements: [
      "Improved test coverage by 70–80% and reduced manual effort.",
      "Detected 50+ performance bottlenecks under peak load.",
      "Reduced defect leakage by 90% and improved sprint efficiency.",
      "Reduced API-related defects by 100% through endpoint validation.",
    ],
    tech: [
      "Katalon Studio",
      "Playwright",
      "Postman",
      "AIO Test",
      "ArangoDB",
      "MySQL",
      "Jira",
    ],
  },
  {
    company: "PT Tokopedia",
    location: "South Jakarta",
    role: "Software Quality Assurance",
    period: "Dec 2021 — Dec 2022",
    summary:
      "Assured quality across Android, iOS, and Web for a large-scale e-commerce platform, including critical features such as TokopediaNOW!.",
    responsibilities: [
      "Tested Data Tracker outputs and aligned results with the Data Analytics team for reliability.",
      "Designed comprehensive test plans and scenarios for functional and non-functional needs.",
      "Led bug analysis and defect tracking, including root-cause identification and prioritization.",
      "Executed smoke, regression, manual, and sanity checks on critical features.",
    ],
    achievements: [
      "Maintained consistent quality across Android, iOS, and Web ecosystems.",
      "Ensured smooth deployment cycles through disciplined release validation.",
      "Improved documentation clarity for issues, priorities, and progress in Jira.",
    ],
    tech: ["Manual Testing", "Regression", "Jira", "Android", "iOS", "Web"],
  },
];

/* --------------------------------------------------------------------------
 * PROJECTS
 * ---------------------------------------------------------------------- */
export interface Project {
  title: string;
  icon: LucideIcon;
  category: string;
  description: string;
  responsibilities: string[];
  tech: string[];
  results: { label: string; value: string }[];
  accent: "primary" | "success" | "accent";
}

export const projects: Project[] = [
  {
    title: "Hospital Information System Automation",
    icon: Stethoscope,
    category: "SIMRS · Hospita",
    description:
      "End-to-end Playwright + Cucumber automation for the Hospita hospital information system, covering outpatient, emergency, and inpatient workflows with reusable page objects.",
    responsibilities: [
      "Built BDD scenarios in Gherkin mapped to a Page Object Model.",
      "Validated cross-module data flow between clinical and finance modules.",
      "Stabilised flaky UI interactions (dropdowns, modals, dynamic tables).",
    ],
    tech: ["Playwright", "Cucumber", "Node.js", "PostgreSQL"],
    results: [
      { label: "Coverage", value: "70–80%" },
      { label: "Manual effort", value: "Reduced" },
    ],
    accent: "primary",
  },
  {
    title: "Electronic Medical Record Testing",
    icon: FileCheck2,
    category: "EMR · Clinical",
    description:
      "Functional and regression testing for the EMR module, ensuring accurate patient records, resume ringkasan pasien pulang, and compliant clinical data handling.",
    responsibilities: [
      "Authored structured test cases with clear preconditions and assertions.",
      "Verified record integrity across create, edit, and discharge summary flows.",
      "Flagged ambiguous requirements as Need-Clarification items.",
    ],
    tech: ["Manual Testing", "Gherkin", "Jira", "SQL"],
    results: [
      { label: "Req. coverage", value: "95%" },
      { label: "Defect leakage", value: "Low" },
    ],
    accent: "success",
  },
  {
    title: "Executive Dashboard Testing",
    icon: LayoutDashboard,
    category: "Analytics · Finance",
    description:
      "Validation of executive and finance dashboards, cross-checking aggregated metrics against source databases for accuracy and reliability.",
    responsibilities: [
      "Reconciled dashboard figures against PostgreSQL/MySQL source data.",
      "Tested filters, date ranges, and drill-downs for consistency.",
      "Verified performance under realistic data volumes.",
    ],
    tech: ["Postman", "SQL", "PostgreSQL", "MySQL"],
    results: [
      { label: "Data accuracy", value: "Verified" },
      { label: "Regressions", value: "Caught early" },
    ],
    accent: "accent",
  },
  {
    title: "Settlement Piutang Automation",
    icon: ClipboardCheck,
    category: "Finance & Accounting",
    description:
      "Automated regression for the receivables (piutang) settlement flow in the Hospita finance module, safeguarding billing accuracy across releases.",
    responsibilities: [
      "Automated billing and settlement happy-paths and edge cases.",
      "Validated ledger entries and payment reconciliation in the database.",
      "Integrated scenarios into the regression suite.",
    ],
    tech: ["Playwright", "Cucumber", "SQL"],
    results: [
      { label: "Billing errors", value: "Prevented" },
      { label: "Regression", value: "Automated" },
    ],
    accent: "primary",
  },
  {
    title: "Laboratory Automation",
    icon: FlaskConical,
    category: "SIMRS · Lab",
    description:
      "Automation coverage for laboratory ordering and result workflows, ensuring correct specimen tracking and result reporting.",
    responsibilities: [
      "Automated lab order → result → verification journeys.",
      "Checked result value mapping and status transitions.",
      "Reduced manual regression time for the lab module.",
    ],
    tech: ["Playwright", "Node.js", "Cucumber"],
    results: [
      { label: "Manual time", value: "Reduced" },
      { label: "Coverage", value: "Expanded" },
    ],
    accent: "success",
  },
  {
    title: "Radiology Automation",
    icon: Stethoscope,
    category: "SIMRS · Radiology",
    description:
      "Test automation for radiology ordering and reporting workflows, validating request-to-report accuracy and integration points.",
    responsibilities: [
      "Automated radiology request and reporting scenarios.",
      "Validated integration with clinical and billing modules.",
      "Maintained stable locators using shared helper patterns.",
    ],
    tech: ["Playwright", "Cucumber", "PostgreSQL"],
    results: [
      { label: "Integration", value: "Validated" },
      { label: "Stability", value: "Improved" },
    ],
    accent: "accent",
  },
  {
    title: "API Automation",
    icon: Server,
    category: "Integration · Postman",
    description:
      "API test coverage across integration and regression using Postman collections and environment variables, reducing API defects significantly.",
    responsibilities: [
      "Built reusable Postman collections with environments.",
      "Validated endpoints for functionality, integration, and regression.",
      "Asserted status codes, schema, and business rules.",
    ],
    tech: ["Postman", "REST", "JSON", "Newman"],
    results: [
      { label: "API defects", value: "-80%" },
      { label: "Coverage", value: "Broad" },
    ],
    accent: "primary",
  },
  {
    title: "Performance Testing with JMeter",
    icon: Gauge,
    category: "Load & Stress",
    description:
      "Load and stress testing with Apache JMeter to validate scalability and stability, surfacing performance issues before production.",
    responsibilities: [
      "Designed thread groups to model realistic peak traffic.",
      "Measured response time, throughput, and error rate.",
      "Reported bottlenecks with actionable evidence.",
    ],
    tech: ["JMeter", "Load Testing", "Dashboards"],
    results: [
      { label: "Issues found", value: "50+" },
      { label: "Stability", value: "Validated" },
    ],
    accent: "success",
  },
];

/* --------------------------------------------------------------------------
 * TESTING DOCUMENTATION
 * ---------------------------------------------------------------------- */
export const testingDocs = [
  {
    icon: ClipboardCheck,
    title: "Test Plan",
    text: "Scope, approach, resources, and schedule aligned to each release and requirement set.",
  },
  {
    icon: ListChecks,
    title: "Test Cases",
    text: "Structured cases with ID, precondition, steps, expected result, type, and priority.",
  },
  {
    icon: FileCheck2,
    title: "Bug Reports",
    text: "Clear, reproducible defects tracked in Jira with severity, priority, and evidence.",
  },
  {
    icon: Boxes,
    title: "RTM",
    text: "Requirement Traceability Matrix mapping requirements to cases for full coverage.",
  },
  {
    icon: ListChecks,
    title: "Checklist",
    text: "Smoke, sanity, and release checklists to gate deployments consistently.",
  },
  {
    icon: Globe,
    title: "Release Notes",
    text: "Verified fixes and validated changes documented per deployment phase.",
  },
];

/* --------------------------------------------------------------------------
 * CERTIFICATIONS
 * ---------------------------------------------------------------------- */
export const certifications = [
  {
    title: "ISTQB Certified Tester — Foundation Level (CTFL)",
    issuer: "Syllabus 4.0",
    note: "Training completed — foundation of testing principles, techniques, and management.",
    primary: true,
  },
  {
    title: "Bachelor of Informatics Engineering",
    issuer: "Universitas Raharja",
    note: "Computer Science · GPA 3.19 / 4.00 · 2016–2020",
    primary: false,
  },
];
