import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <SearchX className="h-8 w-8" />
      </div>
      <div>
        <p className="font-mono text-sm text-primary">404 · assertion failed</p>
        <h1 className="mt-2 font-display text-3xl font-bold">Page not found</h1>
        <p className="mt-2 max-w-md text-muted-foreground">
          This test case didn&apos;t match any route. Let&apos;s get you back to
          a passing state.
        </p>
      </div>
      <Button asChild>
        <Link href="/">
          <Home /> Back home
        </Link>
      </Button>
    </section>
  );
}
