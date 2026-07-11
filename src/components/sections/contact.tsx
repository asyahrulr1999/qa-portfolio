import { Download, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.links.email,
    accent: "text-primary bg-primary/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "achmad-syahrul-ramadhan",
    href: siteConfig.links.linkedin,
    accent: "text-accent bg-accent/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "asyahrulr1999",
    href: siteConfig.links.github,
    accent: "text-foreground bg-secondary",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's build software worth trusting"
                description="Open to QA Engineering / QA Automation roles. The fastest way to reach me is email."
                align="left"
              />
              <Reveal className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={siteConfig.links.email}>
                    <Mail /> Email me
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={siteConfig.resumePath} download>
                    <Download /> Download CV
                  </a>
                </Button>
              </Reveal>
            </div>

            <Stagger className="grid gap-4 sm:grid-cols-2">
              {channels.map((c) => (
                <StaggerItem key={c.label}>
                  <a href={c.href} target="_blank" rel="noreferrer">
                    <Card className="group h-full transition-all hover:-translate-y-1 hover:border-primary/40">
                      <CardContent className="space-y-3 p-5">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.accent}`}
                        >
                          <c.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="truncate text-sm font-medium group-hover:text-primary">
                            {c.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
