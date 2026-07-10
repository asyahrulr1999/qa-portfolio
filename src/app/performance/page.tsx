import type { Metadata } from "next";
import { Gauge } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { PerformanceShowcase } from "@/components/sections/performance-showcase";

export const metadata: Metadata = {
  title: "Performance Testing",
  description:
    "Load and stress testing with Apache JMeter: response time, throughput (TPS), error rate, and aggregate reports validating scalability under peak load.",
};

export default function PerformancePage() {
  return (
    <>
      <PageHeader
        icon={Gauge}
        eyebrow="Performance Testing"
        title="Load & stress testing with JMeter"
        description="Realistic peak-traffic simulation surfacing performance issues before production — measured across response time, TPS, and throughput."
      />
      <PerformanceShowcase />
    </>
  );
}
