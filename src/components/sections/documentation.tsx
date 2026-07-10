import { testingDocs } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";

export function Documentation() {
  return (
    <section id="documentation" className="scroll-mt-20 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Testing Documentation"
          title="Every release, fully documented"
          description="Structured artifacts that keep testing transparent, traceable, and repeatable."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testingDocs.map((doc) => (
            <StaggerItem key={doc.title}>
              <Card className="group h-full transition-all hover:-translate-y-1 hover:border-accent/40">
                <CardContent className="flex gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <doc.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">{doc.text}</p>
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
