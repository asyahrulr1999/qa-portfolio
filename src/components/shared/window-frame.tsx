import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface WindowFrameProps {
  title?: string;
  children: ReactNode;
  className?: string;
  tone?: "terminal" | "editor" | "browser";
}

export function WindowFrame({
  title,
  children,
  className,
  tone = "editor",
}: WindowFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-[#0b1120] shadow-2xl shadow-black/40",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/70 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        {title ? (
          <span className="ml-3 truncate font-mono text-xs text-slate-400">
            {title}
          </span>
        ) : null}
        {tone === "terminal" ? (
          <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-slate-500">
            bash
          </span>
        ) : null}
      </div>
      <div className="text-slate-200">{children}</div>
    </div>
  );
}
