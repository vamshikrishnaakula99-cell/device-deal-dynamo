import { Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, localBusinessJsonLd } from "@/lib/business";
import { SERVICE_LIST, type ServiceInfo } from "@/lib/services";

export function serviceHead(s: ServiceInfo) {
  const url = `${SITE_URL}/${s.slug}`;
  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${s.name} in Coram, NY`,
          serviceType: s.name,
          provider: { "@id": localBusinessJsonLd["@id"] },
          areaServed: localBusinessJsonLd.areaServed,
          url,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: s.name, item: url },
          ],
        }),
      },
    ],
  };
}

export function ServicePage({ s }: { s: ServiceInfo }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">iFixScreens</span>
          </Link>
          <a href={PHONE_TEL} className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <main>
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> / <span>{s.name}</span>
        </nav>
        <section className="mx-auto max-w-4xl px-4 pb-14 pt-10 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            <MapPin className="h-3.5 w-3.5" /> Coram, NY · Walk-ins welcome
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{s.h1}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{s.intro}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <span className="flex items-center gap-1.5 rounded-full bg-info/10 px-3 py-1 text-info"><Clock className="h-4 w-4" />{s.time}</span>
            <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary"><ShieldCheck className="h-4 w-4" />{s.warranty}</span>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" hash="book" className="rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30">
              Get Free Quote
            </Link>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-border bg-card px-8 py-4 text-lg font-bold">
              Get Directions
            </a>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 py-14">
            <h2 className="text-2xl font-bold sm:text-3xl">{s.name} services we offer</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.repairs.map((r) => (
                <li key={r} className="card-glow flex items-center gap-3 rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-6 space-y-3">
            {s.faqs.map((f) => (
              <details key={f.q} className="card-glow group rounded-xl p-5">
                <summary className="cursor-pointer font-bold group-open:text-primary">{f.q}</summary>
                <p className="mt-2 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 py-14">
            <h2 className="text-2xl font-bold">Other repairs in Coram</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {SERVICE_LIST.filter((o) => o.slug !== s.slug).map((o) => (
                <a key={o.slug} href={`/${o.slug}`} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">
                  {o.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-10 text-center text-sm text-muted-foreground">
        <p className="font-bold text-foreground">iFixScreens Coram</p>
        <p>{ADDRESS} · <a href={PHONE_TEL} className="text-primary">{PHONE_DISPLAY}</a></p>
        <p>Mon–Sat 10am–7pm · Sun 11am–6pm</p>
      </footer>
    </div>
  );
}
