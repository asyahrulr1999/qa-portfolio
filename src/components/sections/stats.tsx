import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Stagger, StaggerItem } from "@/components/shared/reveal";

export function Stats() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="container py-12">
        <Stagger className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
