import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/ServicePage";
import { SERVICES } from "@/lib/services";

const s = SERVICES["ipad-tablet-repair"];

export const Route = createFileRoute("/ipad-tablet-repair")({
  staticData: { sitemap: true },
  head: () => serviceHead(s),
  component: () => <ServicePage s={s} />,
});
