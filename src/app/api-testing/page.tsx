import type { Metadata } from "next";
import { Server } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ApiShowcase } from "@/components/sections/api-showcase";

export const metadata: Metadata = {
  title: "API Testing",
  description:
    "API testing with Postman: collections, example requests and responses, environments, and automated assertions for healthcare integrations.",
};

export default function ApiTestingPage() {
  return (
    <>
      <PageHeader
        icon={Server}
        eyebrow="API Testing"
        title="Postman collections that validate integrations"
        description="Structured collections with environments and assertions — validating endpoints for functionality, integration, and regression."
      />
      <ApiShowcase />
    </>
  );
}
