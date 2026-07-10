import Link from "next/link";
import { ArrowUpRight, Bot, Gauge, Server } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";

const showcases = [
  {
    href: "/automation",
    icon: Bot,
    title: "Automation Showcase",
    text: "Playwright + Cucumber framework: feature files, page objects, step definitions, HTML report, trace viewer, and CI pipeline.",
    tags: ["Playwright", "BDD", "POM", "CI/CD"],
    accent: "text-primary bg-primary/10",
  },
  {
    href: "/api-testing",
    icon: Server,
    title: "API Testing",
    text: "Postman collections with environments, example requests, assertions, and response validation for healthcare integrations.",
    tags: ["Postman", "REST", "Newman"],
    accent: "text-accent bg-accent/10",
  },
  {
    href: "/performance",
    icon: Gauge,
    title: "Performance Testing",
    text: "JMeter dashboards covering throughput, TPS, response time, and error rate under realistic peak load.",
    tags: ["JMeter", "Load", "Stress"],
    accent: "text-success bg-success/10",
  },
];

export function ShowcaseTeaser() {
  return (
    <section className="scroll-mt-20 bg-card/30 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Deep Dives"
          title="See the craft behind the coverage"
          description="Dedicated walkthroughs of how the automation, API, and performance work is actually built."
        />

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {showcases.map((s) => (
            <StaggerItem key={s.href}>
              <Link href={s.href} className="group block h-full">
                <Card className="h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.accent}`}>
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display text-lg font-semibold">
                        {s.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </div>
                    <p className="flex-1 text-sm text-muted-foreground">
                      {s.text}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
