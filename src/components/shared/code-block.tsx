import { cn } from "@/lib/utils";

interface Token {
  text: string;
  type?:
    | "keyword"
    | "string"
    | "comment"
    | "fn"
    | "tag"
    | "prop"
    | "num"
    | "muted"
    | "success"
    | "plain";
}

const colorMap: Record<NonNullable<Token["type"]>, string> = {
  keyword: "text-[#c792ea]",
  string: "text-[#c3e88d]",
  comment: "text-slate-500 italic",
  fn: "text-[#82aaff]",
  tag: "text-[#f78c6c]",
  prop: "text-[#7fdbca]",
  num: "text-[#f78c6c]",
  muted: "text-slate-500",
  success: "text-[#22C55E]",
  plain: "text-slate-200",
};

export function CodeBlock({
  lines,
  className,
  showLineNumbers = true,
}: {
  lines: Token[][];
  className?: string;
  showLineNumbers?: boolean;
}) {
  return (
    <pre
      className={cn(
        "overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]",
        className
      )}
    >
      <code>
        {lines.map((line, i) => (
          <div key={i} className="table-row">
            {showLineNumbers ? (
              <span className="table-cell select-none pr-4 text-right text-slate-600">
                {i + 1}
              </span>
            ) : null}
            <span className="table-cell whitespace-pre">
              {line.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.map((t, j) => (
                  <span key={j} className={colorMap[t.type ?? "plain"]}>
                    {t.text}
                  </span>
                ))
              )}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
}
