"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, TerminalSquare } from "lucide-react";

const steps = [
  "Booting test runner",
  "Loading Playwright suites",
  "Spinning up environments",
  "All checks passed",
];

export function LoadingScreen() {
  const [done, setDone] = React.useState(false);
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const sequence = steps.map((_, i) =>
      setTimeout(() => setStep(i), 320 * (i + 1))
    );
    const finish = setTimeout(() => setDone(true), 320 * steps.length + 500);
    return () => {
      sequence.forEach(clearTimeout);
      clearTimeout(finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex w-full max-w-sm flex-col items-center gap-6 px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary"
            >
              <TerminalSquare className="h-8 w-8" />
            </motion.div>

            <div className="w-full space-y-2 font-mono text-xs">
              {steps.map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{
                    opacity: i <= step ? 1 : 0.25,
                    x: i <= step ? 0 : -8,
                  }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    className={`h-3.5 w-3.5 ${
                      i <= step ? "text-success" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={
                      i === steps.length - 1 && i <= step
                        ? "text-success"
                        : "text-muted-foreground"
                    }
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-success"
                initial={{ width: "0%" }}
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
