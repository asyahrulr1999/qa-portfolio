import type { Metadata } from "next";
import { Bot } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { AutomationShowcase } from "@/components/sections/automation-showcase";

export const metadata: Metadata = {
  title: "Automation Showcase",
  description:
    "Playwright + Cucumber BDD automation framework: feature files, page objects, step definitions, execution reports, trace viewer, folder structure, and CI/CD pipeline.",
};

export default function AutomationPage() {
  return (
    <>
      <PageHeader
        icon={Bot}
        eyebrow="Automation Showcase"
        title="Playwright + Cucumber BDD framework"
        description="A maintainable, scalable automation framework built on the Page Object Model — from Gherkin specs all the way to a green CI pipeline."
      />
      <AutomationShowcase />
    </>
  );
}
