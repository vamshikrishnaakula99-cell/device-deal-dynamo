import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/ServicePage";
import { SERVICES } from "@/lib/services";

const s = SERVICES["samsung-repair"];

export const Route = createFileRoute("/samsung-repair")({
  staticData: { sitemap: true },
  head: () => serviceHead(s),
  component: () => <ServicePage s={s} />,
});
