import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Smartphone,
  Battery,
  Monitor,
  Gamepad2,
  Wifi,
  Briefcase,
  MapPin,
  Star,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import heroRepair from "@/assets/hero-repair.jpg";
import gamingPc from "@/assets/gaming-pc.jpg";

const PHONE_TEL = "tel:+16315550134";
const PHONE_DISPLAY = "(631) 555-0134";
const EMAIL = "hello@shotechli.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sho Tech — We Come To You | Phone & PC Repair in Port Jefferson, NY" },
      {
        name: "description",
        content:
          "Cracked screen? Dead battery? Sho Tech brings expert phone, PC, and console repair straight to your door across Port Jefferson & Long Island. Same-day appointments. Book now.",
      },
      { property: "og:title", content: "Sho Tech — Mobile Phone & PC Repair, Port Jefferson NY" },
      {
        property: "og:description",
        content:
          "Expert tech repair at your door. Screens, batteries, PCs, consoles & smart home. Serving Port Jefferson and nearby Long Island.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const services = [
  {
    icon: Smartphone,
    title: "Screen Repair",
    price: "from $59",
    desc: "Cracked or shattered iPhone, Samsung, or iPad screen replaced at your home or office — most done in under an hour.",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    price: "from $59",
    desc: "Phone dying by lunch? We swap in a fresh, high-quality battery on the spot and test it before we leave.",
  },
  {
    icon: Monitor,
    title: "PC & Mac Services",
    price: "from $150",
    desc: "Virus removal, tune-ups, data recovery, upgrades, and custom builds — expert computer help without the drop-off.",
  },
  {
    icon: Gamepad2,
    title: "Game Console Repair",
    price: "from $59",
    desc: "HDMI ports, overheating, disk drives and more for PlayStation, Xbox, and Nintendo Switch.",
  },
  {
    icon: Wifi,
    title: "Home & Network",
    price: "from $69",
    desc: "Wi-Fi dead zones fixed, smart home devices set up, TVs mounted and streaming configured.",
  },
  {
    icon: Briefcase,
    title: "Business IT Support",
    price: "from $199",
    desc: "On-site support for small businesses — networks, workstations, backups, and same-day troubleshooting.",
  },
];

const areas = [
  "Port Jefferson",
  "Port Jefferson Station",
  "Miller Place",
  "Mount Sinai",
  "Setauket",
  "East Setauket",
  "Stony Brook",
  "Terryville",
  "Coram",
  "Selden",
  "Rocky Point",
  "Belle Terre",
  "Old Field",
];

const reviews = [
  {
    name: "Marissa T.",
    text: "Cracked my iPhone screen in the morning, fixed at my kitchen table by the afternoon. Unreal service.",
  },
  {
    name: "Dan R.",
    text: "They built my son a gaming PC and set everything up at our house. Zero hassle, fair price.",
  },
  {
    name: "Priya S.",
    text: "Our office Wi-Fi was a nightmare for months. One visit from Sho Tech and everything just works.",
  },
];

const steps = [
  { icon: Phone, title: "Call or book online", desc: "Tell us what's broken and where you are." },
  { icon: Wrench, title: "We come to you", desc: "A certified tech arrives with the parts and tools." },
  { icon: CheckCircle2, title: "Fixed on the spot", desc: "Most repairs done in under an hour, guaranteed." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <GamingPcFeature />
      <Reviews />
      <ServiceArea />
      <BookingForm />
      <Footer />
      <StickyCallBar />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Wrench className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold">Sho Tech</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href="#book"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Book a Repair
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroRepair}
          alt="Technician repairing a smartphone screen"
          className="h-full w-full object-cover opacity-40"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:pt-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
          <MapPin className="h-3.5 w-3.5" />
          Port Jefferson & Long Island, NY
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          Broken phone? <span className="text-primary text-glow">We come to you.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Expert phone, PC, and console repair at your door. No shop, no drop-off, no waiting days
          without your device. Same-day appointments available.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#book"
            className="w-full rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:w-auto"
          >
            Book a Repair — Free Quote
          </a>
          <a
            href={PHONE_TEL}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card px-8 py-4 text-lg font-bold transition-colors hover:bg-secondary sm:w-auto"
          >
            <Phone className="h-5 w-5 text-primary" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Most screen & battery repairs done in under 60 minutes · 90-day warranty
        </p>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Clock, label: "Same-day service" },
    { icon: ShieldCheck, label: "90-day warranty" },
    { icon: Star, label: "5-star rated locally" },
    { icon: MapPin, label: "We come to you" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="flex items-center justify-center gap-2">
            <i.icon className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold">{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        One visit. <span className="text-primary">Fixed.</span>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        Upfront pricing, quality parts, and a tech who shows up on time — at your home or office.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="card-glow rounded-2xl bg-card p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">
                {s.price}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">How it works</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GamingPcFeature() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="animate-float-slow overflow-hidden rounded-3xl card-glow">
          <img
            src={gamingPc}
            alt="Custom gaming PC with glowing fans built by Sho Tech"
            loading="lazy"
            width={1280}
            height={960}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Custom Gaming PCs
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Your dream rig, built & set up at your home
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us your budget and the games you play. We pick the parts, build it, cable-manage
            it, and set everything up where you'll actually play. You just press power.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Free build consultation & parts list",
              "Benchmarked and stress-tested before handover",
              "Full setup: monitor, peripherals, Windows & games",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="mt-8 inline-block rounded-2xl bg-primary px-8 py-4 font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Start My Build
          </a>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Neighbors who called us</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="card-glow rounded-2xl bg-background p-6">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Proudly serving <span className="text-primary">your neighborhood</span>
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
        Based in Port Jefferson, driving to you across northern Long Island.
      </p>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
        {areas.map((a) => (
          <span
            key={a}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
          >
            {a}
          </span>
        ))}
      </div>
    </section>
  );
}

function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Book your repair</h2>
        <p className="mt-3 text-center text-muted-foreground">
          Tell us what's broken — we'll reply fast with a free quote and available times.
        </p>
        {sent ? (
          <div className="card-glow mt-10 rounded-2xl bg-background p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">Request received!</h3>
            <p className="mt-2 text-muted-foreground">
              We'll be in touch shortly. Need us faster? Call{" "}
              <a href={PHONE_TEL} className="font-bold text-primary">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        ) : (
          <form
            className="card-glow mt-10 space-y-4 rounded-2xl bg-background p-6 sm:p-8"
            action={`mailto:${EMAIL}`}
            method="post"
            encType="text/plain"
            onSubmit={() => setSent(true)}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
              <input
                required
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </div>
            <select
              required
              name="service"
              defaultValue=""
              className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="" disabled>
                What do you need fixed?
              </option>
              {services.map((s) => (
                <option key={s.title} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Other">Something else</option>
            </select>
            <textarea
              name="details"
              rows={4}
              placeholder="Tell us a bit more — device model, what happened, your town…"
              className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="w-full rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Get My Free Quote
            </button>
            <p className="text-center text-xs text-muted-foreground">
              No spam, ever. We only contact you about your repair.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 pb-24 text-center text-sm text-muted-foreground sm:pb-10">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold text-foreground">Sho Tech</span>
        </div>
        <p>
          Mobile electronics repair · Port Jefferson, NY ·{" "}
          <a href={`mailto:${EMAIL}`} className="text-primary">
            {EMAIL}
          </a>
        </p>
        <p>© {new Date().getFullYear()} Sho Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}

function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={PHONE_TEL}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card py-3 text-sm font-bold"
        >
          <Phone className="h-4 w-4 text-primary" /> Call Now
        </a>
        <a
          href="#book"
          className="flex-1 rounded-xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground"
        >
          Book a Repair
        </a>
      </div>
    </div>
  );
}
