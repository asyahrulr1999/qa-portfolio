import { aboutSummary, aboutDetail, aboutHighlights } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Quality is engineered, not inspected in"
          align="left"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal direction="up" className="space-y-5">
            <p className="text-lg leading-relaxed text-foreground/90">
              {aboutSummary}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {aboutDetail}
            </p>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:border-primary/40">
                  <CardContent className="space-y-3 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
