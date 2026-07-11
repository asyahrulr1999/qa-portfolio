"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Timer, TrendingUp, Zap } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* deterministic sample series so SSR == CSR */
const respSeries = [220, 240, 210, 260, 300, 280, 340, 320, 380, 360, 410, 390];
const tpsSeries = [40, 55, 62, 70, 82, 88, 95, 102, 110, 118, 124, 130];

function LineChart({
  data,
  color,
  height = 160,
}: {
  data: number[];
  color: string;
  height?: number;
}) {
  const width = 480;
  const max = Math.max(...data) * 1.1;
  const min = Math.min(...data) * 0.85;
  const stepX = width / (data.length - 1);
  const y = (v: number) => height - ((v - min) / (max - min)) * (height - 20) - 10;
  const points = data.map((v, i) => `${i * stepX},${y(v)}`).join(" ");
  const area = `0,${height} ${points} ${width},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1="0"
          x2={width}
          y1={height * g}
          y2={height * g}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}
      <polygon points={area} fill={`url(#grad-${color})`} />
      <motion.polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      {data.map((v, i) => (
        <circle key={i} cx={i * stepX} cy={y(v)} r="2.5" fill={color} />
      ))}
    </svg>
  );
}

function BarChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-full items-end gap-1.5">
      {data.map((v, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t"
          style={{ backgroundColor: color, opacity: 0.85 }}
          initial={{ height: 0 }}
          whileInView={{ height: `${(v / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

const kpis = [
  { icon: Timer, label: "Avg Response Time", value: "312", unit: "ms", tone: "text-accent" },
  { icon: Zap, label: "Peak TPS", value: "130", unit: "req/s", tone: "text-success" },
  { icon: TrendingUp, label: "Throughput", value: "7.8k", unit: "req/min", tone: "text-primary" },
  { icon: Activity, label: "Error Rate", value: "0.2", unit: "%", tone: "text-success" },
];

const results = [
  { label: "Download Patient Drug VAT Report", samples: "5,000", avg: "180", p95: "310", err: "0.0%" },
  { label: "Download Accounts Receivable Revenue Report", samples: "5,000", avg: "290", p95: "520", err: "0.0%" },
  { label: "Download Journal Entry Report", samples: "3,000", avg: "410", p95: "760", err: "0.0%" },
  { label: "Download General Ledger Report", samples: "4,000", avg: "350", p95: "640", err: "0.0%" },
  { label: "Download Trial Balance Report", samples: "3,500", avg: "380", p95: "690", err: "0.0%" },
  { label: "Download Statement of Financial Position Report", samples: "3,000", avg: "430", p95: "800", err: "0.0%" },
];

export function PerformanceShowcase() {
  return (
    <div className="container space-y-16 py-16">
      {/* KPI cards */}
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <Card key={kpi.label}>
              <CardContent className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-secondary ${kpi.tone}`}>
                    <kpi.icon className="h-4 w-4" />
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    JMeter
                  </Badge>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-3xl font-bold ${kpi.tone}`}>
                    {kpi.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {kpi.unit}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{kpi.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>

      {/* charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display font-semibold">
                  Response Time over load
                </h3>
                <span className="flex items-center gap-1.5 font-mono text-xs text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent" /> ms
                </span>
              </div>
              <div className="h-40 text-muted-foreground">
                <LineChart data={respSeries} color="#38BDF8" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>0 users</span>
                <span>ramp-up</span>
                <span>peak</span>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display font-semibold">
                  Throughput (TPS)
                </h3>
                <span className="flex items-center gap-1.5 font-mono text-xs text-success">
                  <span className="h-2 w-2 rounded-full bg-success" /> req/s
                </span>
              </div>
              <div className="h-40">
                <BarChart data={tpsSeries} color="#22C55E" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>00:00</span>
                <span>02:30</span>
                <span>05:00</span>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      {/* TPS gauge + summary */}
      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <Reveal direction="right">
          <Card className="h-full">
            <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="10"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    whileInView={{
                      strokeDashoffset: 2 * Math.PI * 52 * (1 - 0.87),
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <Gauge className="mb-1 h-5 w-5 text-primary" />
                  <span className="font-display text-3xl font-bold">87%</span>
                  <span className="text-xs text-muted-foreground">
                    capacity used
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                System stayed stable at peak load with headroom to spare.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="overflow-hidden">
            <div className="border-b border-border bg-card/60 px-5 py-3">
              <h3 className="font-display font-semibold">
                Aggregate Report — Summary
              </h3>
            </div>
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Transaction</th>
                    <th className="px-4 py-3 font-medium">Samples</th>
                    <th className="px-4 py-3 font-medium">Avg (ms)</th>
                    <th className="px-4 py-3 font-medium">P95 (ms)</th>
                    <th className="px-4 py-3 font-medium">Error</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  {results.map((r) => (
                    <tr key={r.label} className="border-b border-border/60">
                      <td className="px-5 py-3 font-sans font-medium">
                        {r.label}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {r.samples}
                      </td>
                      <td className="px-4 py-3 text-accent">{r.avg}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.p95}</td>
                      <td className="px-4 py-3 text-success">{r.err}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
