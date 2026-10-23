import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/ServicePage";
import { SERVICES } from "@/lib/services";

const s = SERVICES["computer-repair"];

export const Route = createFileRoute("/computer-repair")({
  staticData: { sitemap: true },
  head: () => serviceHead(s),
  component: () => <ServicePage s={s} />,
});
