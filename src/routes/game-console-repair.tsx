import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, serviceHead } from "@/components/ServicePage";
import { SERVICES } from "@/lib/services";

const s = SERVICES["game-console-repair"];

export const Route = createFileRoute("/game-console-repair")({
  staticData: { sitemap: true },
  head: () => serviceHead(s),
  component: () => <ServicePage s={s} />,
});
