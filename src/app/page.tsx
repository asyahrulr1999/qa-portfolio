import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { ShowcaseTeaser } from "@/components/sections/showcase-teaser";
import { Documentation } from "@/components/sections/documentation";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ShowcaseTeaser />
      <Documentation />
      <Certifications />
      <Contact />
    </>
  );
}
