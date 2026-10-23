import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/ServicePage";
import { SERVICES } from "@/lib/services";

const s = SERVICES["iphone-repair"];

export const Route = createFileRoute("/iphone-repair")({
  staticData: { sitemap: true },
  head: () => serviceHead(s),
  component: () => <ServicePage s={s} />,
});
