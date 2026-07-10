import { Award, GraduationCap } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 bg-card/30 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications & Education"
          title="Credentials that back the craft"
        />

        <Stagger className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <Card
                className={`h-full ${
                  cert.primary ? "border-primary/40 bg-primary/5" : ""
                }`}
              >
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        cert.primary
                          ? "bg-primary/15 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {cert.primary ? (
                        <Award className="h-5 w-5" />
                      ) : (
                        <GraduationCap className="h-5 w-5" />
                      )}
                    </div>
                    {cert.primary ? (
                      <Badge variant="default">Certified</Badge>
                    ) : null}
                  </div>
                  <h3 className="font-display font-semibold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-primary">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.note}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
