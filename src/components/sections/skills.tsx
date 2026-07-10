"use client";

import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SkillBar } from "@/components/shared/skill-bar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-card/30 py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for full-spectrum QA"
          description="From BDD automation frameworks to API, database, and load testing — the stack behind reliable releases."
        />

        <Reveal className="mt-12">
          <Tabs defaultValue={skillGroups[0].name} className="w-full">
            <div className="flex justify-center">
              <TabsList className="flex-wrap">
                {skillGroups.map((group) => (
                  <TabsTrigger key={group.name} value={group.name}>
                    <group.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{group.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillGroups.map((group) => (
              <TabsContent key={group.name} value={group.name}>
                <Card>
                  <CardContent className="grid gap-x-10 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
                    {group.skills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={i * 0.05}
                      />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
