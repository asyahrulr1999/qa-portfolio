"use client";

import { CheckCircle2, FolderClosed, Send, Settings2, Variable } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { WindowFrame } from "@/components/shared/window-frame";
import { CodeBlock } from "@/components/shared/code-block";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const collection = [
  { name: "Hospita — Integration", type: "root" },
  { method: "POST", name: "Auth / Login" },
  { method: "GET", name: "Patient / Get by MRN" },
  { method: "POST", name: "SEP / Verify BPJS" },
  { method: "PUT", name: "Rekam Medis / Update" },
  { method: "GET", name: "Claim / Worklist" },
];

const methodColor: Record<string, string> = {
  GET: "text-success",
  POST: "text-accent",
  PUT: "text-[#febc2e]",
  DELETE: "text-[#ff5f57]",
};

const requestBody: Parameters<typeof CodeBlock>[0]["lines"] = [
  [{ text: "{", type: "plain" }],
  [{ text: '  "noKartu"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"0001234567890"', type: "string" }, { text: ",", type: "plain" }],
  [{ text: '  "tglSep"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"{{today}}"', type: "string" }, { text: ",", type: "plain" }],
  [{ text: '  "poliTujuan"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"INT"', type: "string" }, { text: ",", type: "plain" }],
  [{ text: '  "user"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"{{qaUser}}"', type: "string" }],
  [{ text: "}", type: "plain" }],
];

const responseBody: Parameters<typeof CodeBlock>[0]["lines"] = [
  [{ text: "{", type: "plain" }],
  [{ text: '  "metaData"', type: "prop" }, { text: ": { ", type: "plain" }, { text: '"code"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"200"', type: "string" }, { text: ", ", type: "plain" }, { text: '"message"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"Sukses"', type: "string" }, { text: " },", type: "plain" }],
  [{ text: '  "response"', type: "prop" }, { text: ": {", type: "plain" }],
  [{ text: '    "sep"', type: "prop" }, { text: ": {", type: "plain" }],
  [{ text: '      "noSep"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"0301R0011124V000123"', type: "string" }, { text: ",", type: "plain" }],
  [{ text: '      "peserta"', type: "prop" }, { text: ": { ", type: "plain" }, { text: '"nama"', type: "prop" }, { text: ": ", type: "plain" }, { text: '"BUDI SANTOSO"', type: "string" }, { text: " }", type: "plain" }],
  [{ text: "    }", type: "plain" }],
  [{ text: "  }", type: "plain" }],
  [{ text: "}", type: "plain" }],
];

const tests: Parameters<typeof CodeBlock>[0]["lines"] = [
  [{ text: "pm.test", type: "fn" }, { text: '("status is 200", ', type: "string" }, { text: "() => {", type: "plain" }],
  [{ text: "  pm.response.", type: "plain" }, { text: "to.have.status", type: "fn" }, { text: "(", type: "plain" }, { text: "200", type: "num" }, { text: ");", type: "plain" }],
  [{ text: "});", type: "plain" }],
  [{ text: "pm.test", type: "fn" }, { text: '("SEP number returned", ', type: "string" }, { text: "() => {", type: "plain" }],
  [{ text: "  ", type: "plain" }, { text: "const", type: "keyword" }, { text: " b = pm.response.", type: "plain" }, { text: "json", type: "fn" }, { text: "();", type: "plain" }],
  [{ text: "  pm.", type: "plain" }, { text: "expect", type: "fn" }, { text: "(b.response.sep.noSep).", type: "plain" }, { text: "to.be.a", type: "fn" }, { text: "(", type: "plain" }, { text: "'string'", type: "string" }, { text: ");", type: "plain" }],
  [{ text: "});", type: "plain" }],
];

const environment = [
  { key: "baseUrl", value: "https://staging.hospita.local/api", type: "default" },
  { key: "qaUser", value: "qa.automation", type: "default" },
  { key: "token", value: "••••••••••••••••", type: "secret" },
  { key: "today", value: "{{$isoTimestamp}}", type: "default" },
];

export function ApiShowcase() {
  return (
    <div className="container space-y-16 py-16">
      {/* stats */}
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "API defects reduced", value: "80%", tone: "text-success" },
            { label: "Endpoints covered", value: "Broad", tone: "text-primary" },
            { label: "Runner", value: "Postman + Newman", tone: "text-accent" },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="p-5">
                <p className={`font-display text-2xl font-bold ${s.tone}`}>
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>

      {/* Collection + request/response */}
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <Reveal direction="right">
          <div>
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold">
              <FolderClosed className="h-5 w-5 text-primary" /> Collection
            </h2>
            <Card>
              <CardContent className="space-y-1 p-3 font-mono text-xs">
                {collection.map((item, i) =>
                  item.type === "root" ? (
                    <div
                      key={i}
                      className="mb-1 flex items-center gap-2 border-b border-border pb-2 font-semibold"
                    >
                      <FolderClosed className="h-3.5 w-3.5 text-accent" />
                      {item.name}
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded px-2 py-1.5 hover:bg-secondary"
                    >
                      <span
                        className={`w-10 font-semibold ${methodColor[item.method!]}`}
                      >
                        {item.method}
                      </span>
                      <span className="truncate text-muted-foreground">
                        {item.name}
                      </span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-4">
            {/* request bar */}
            <WindowFrame title="POST · SEP / Verify BPJS">
              <div className="flex items-center gap-2 border-b border-white/10 p-3">
                <span className="rounded bg-accent/20 px-2.5 py-1 font-mono text-xs font-bold text-accent">
                  POST
                </span>
                <span className="flex-1 truncate rounded bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300">
                  {"{{baseUrl}}"}/sep/2.0/insert
                </span>
                <span className="flex items-center gap-1 rounded bg-primary/20 px-3 py-1.5 font-mono text-xs text-primary">
                  <Send className="h-3 w-3" /> Send
                </span>
              </div>
              <div className="border-b border-white/10 px-4 py-2 font-mono text-[11px] text-slate-500">
                Body · raw · JSON
              </div>
              <CodeBlock lines={requestBody} showLineNumbers={false} />
            </WindowFrame>

            {/* response */}
            <WindowFrame title="Response">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2 font-mono text-xs">
                <span className="flex items-center gap-1 text-success">
                  <span className="h-2 w-2 rounded-full bg-success" /> 200 OK
                </span>
                <span className="text-slate-500">312 ms</span>
                <span className="text-slate-500">1.2 KB</span>
              </div>
              <CodeBlock lines={responseBody} showLineNumbers={false} />
            </WindowFrame>
          </div>
        </Reveal>
      </div>

      {/* Tests + Environment */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold">
            <CheckCircle2 className="h-5 w-5 text-success" /> Tests & assertions
          </h2>
          <Reveal>
            <WindowFrame title="Tests tab">
              <CodeBlock lines={tests} showLineNumbers={false} />
              <div className="space-y-1.5 border-t border-white/10 p-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-success">
                  <CheckCircle2 className="h-3.5 w-3.5" /> PASS · status is 200
                </div>
                <div className="flex items-center gap-2 text-success">
                  <CheckCircle2 className="h-3.5 w-3.5" /> PASS · SEP number
                  returned
                </div>
              </div>
            </WindowFrame>
          </Reveal>
        </div>

        <div>
          <h2 className="mb-4 flex items-center gap-2 font-display text-lg font-bold">
            <Variable className="h-5 w-5 text-accent" /> Environment
          </h2>
          <Reveal>
            <Card className="overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-card/60 px-4 py-3">
                <Settings2 className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-sm">Hospita · Staging</span>
              </div>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs text-muted-foreground">
                      <th className="px-4 py-2.5 font-medium">Variable</th>
                      <th className="px-4 py-2.5 font-medium">Value</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-xs">
                    {environment.map((env) => (
                      <tr key={env.key} className="border-b border-border/60">
                        <td className="px-4 py-2.5 text-primary">{env.key}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">
                          <span className="flex items-center gap-2">
                            {env.value}
                            {env.type === "secret" ? (
                              <Badge variant="outline" className="text-[9px]">
                                secret
                              </Badge>
                            ) : null}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
