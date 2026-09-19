import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Smartphone,
  Tablet,
  Monitor,
  Gamepad2,
  Watch,
  MapPin,
  Star,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  BadgeDollarSign,
  Store,
  Users,
} from "lucide-react";
import heroRepair from "@/assets/hero-repair.jpg";

const PHONE_TEL = "tel:+16314034720";
const PHONE_DISPLAY = "(631) 403-4720";
const ADDRESS = "271-11 Route 25A, Mount Sinai, NY 11766";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=271-11+Route+25A+Mount+Sinai+NY+11766";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iFixScreens — Phone, Tablet & Computer Repair in Mount Sinai, NY" },
      {
        name: "description",
        content:
          "Cracked screen? Dead battery? iFixScreens in Mount Sinai, NY fixes phones, tablets, computers & consoles — most done same day in 30 min. 180-day warranty. Walk-ins welcome.",
      },
      { property: "og:title", content: "iFixScreens — Device Repair in Mount Sinai, NY" },
      {
        property: "og:description",
        content:
          "Same-day phone, tablet, computer & console repair on Route 25A in Mount Sinai, NY. 180-day warranty, lowest price guarantee, certified experts. Walk-ins welcome.",
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
    title: "Cell Phone Repair",
    time: "30 minutes",
    warranty: "180-day warranty",
    desc: "iPhone, Samsung, Google Pixel, OnePlus & more. Cracked screens, batteries, charge ports, cameras, water damage — fixed same day.",
  },
  {
    icon: Tablet,
    title: "Tablet Repair",
    time: "45 minutes",
    warranty: "180-day warranty",
    desc: "Apple iPad, Samsung Tab, Amazon Kindle & Lenovo Tab. Screen, battery and camera repairs with a free diagnostic check.",
  },
  {
    icon: Monitor,
    title: "Computer & Mac Repair",
    time: "Free diagnostic",
    warranty: "180-day warranty",
    desc: "MacBook, iMac, PC, Surface & Chromebook. Broken screens, memory/HDD-SSD upgrades, motherboard repair, data recovery, virus clean-up.",
  },
  {
    icon: Gamepad2,
    title: "Game Console Repair",
    time: "45 minutes",
    warranty: "180-day warranty",
    desc: "Xbox, PlayStation & Nintendo Switch. Controller repair, overheating, booting issues, disk drives and more.",
  },
  {
    icon: Watch,
    title: "Smartwatch & Other",
    time: "Free diagnostic",
    warranty: "90-day warranty",
    desc: "Apple Watch, smartwatch, iPod, back glass & drone repair. Certified experts, lowest price guarantee.",
  },
  {
    icon: Store,
    title: "Accessories & Prepaid",
    time: "Walk-in",
    warranty: "In store",
    desc: "Cases, screen protectors, protection plans, refurbished phones & tablets, prepaid wireless plans and bill pay.",
  },
];

const areas = [
  "Mount Sinai",
  "Miller Place",
  "Port Jefferson Station",
  "Port Jefferson",
  "Ridge",
  "Shoreham",
  "Rocky Point",
  "Sound Beach",
  "Wading River",
  "Terryville",
  "East Shoreham",
  "Wildwood",
  "Baiting Hollow",
  "Calverton",
  "Belle Terre",
  "Poquott",
];

const reviews = [
  {
    name: "Marissa T.",
    text: "Cracked my iPhone screen in the morning, walked in and it was fixed before lunch. Quick, fair price, friendly staff.",
  },
  {
    name: "Dan R.",
    text: "My laptop wouldn't boot. They ran a free diagnostic, recovered my files, and had it running again the same day.",
  },
  {
    name: "Priya S.",
    text: "Brought in my son's Nintendo Switch with a broken joystick. Repaired in under an hour and the warranty is great.",
  },
];

const steps = [
  { icon: Phone, title: "Call or walk in", desc: "Tell us what's broken. Walk-ins always welcome — no appointment needed." },
  { icon: Wrench, title: "Free diagnostic", desc: "We check your device and give you a clear, upfront price before any work starts." },
  { icon: CheckCircle2, title: "Fixed same day", desc: "Most repairs done in 30–45 minutes, backed by our 180-day warranty." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Reviews />
      <ServiceArea />
      <StoreInfo />
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
          <span className="font-display text-xl font-bold">iFixScreens</span>
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
            Get a Quote
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
          Mount Sinai, NY · On Route 25A
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          Broken screen? <span className="text-primary text-glow">Fixed today.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Phone, tablet, computer & console repair on Route 25A in Mount Sinai. Walk-ins welcome,
          most repairs done in 30 minutes, and every fix is backed by a 180-day warranty.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 sm:w-auto"
          >
            Get Directions
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
          Open Mon–Sat 10am–7pm · Sun 11am–6pm · Walk-ins always welcome
        </p>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Clock, label: "30-minute repairs" },
    { icon: ShieldCheck, label: "180-day warranty" },
    { icon: BadgeDollarSign, label: "Lowest price guarantee" },
    { icon: Store, label: "Walk-ins welcome" },
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
        What do you need <span className="text-primary">fixed?</span>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        One stop for every device. Upfront pricing, quality parts, and certified experts — on Route
        25A, next to Domino's Pizza.
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
                {s.time}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              {s.warranty}
            </p>
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

function WhyUs() {
  const perks = [
    {
      icon: ShieldCheck,
      title: "180-day hassle-free warranty",
      desc: "Every phone, tablet, computer and console repair is backed by our 180-day warranty — smartwatch repairs carry 90 days.",
    },
    {
      icon: BadgeDollarSign,
      title: "Lowest price guarantee",
      desc: "Bring us a lower local price and we'll match it. Quality parts and certified experts, never overpriced.",
    },
    {
      icon: Clock,
      title: "Same-day, 30-minute repairs",
      desc: "Most phone repairs done in 30 minutes, tablets and consoles in about 45. Wait in-store or grab a slice next door.",
    },
    {
      icon: Users,
      title: "First-responder discount",
      desc: "All first responders get 10% off glass screen repairs and 25% off any accessory. Just show your ID.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Why neighbors choose <span className="text-primary">iFixScreens</span>
      </h2>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {perks.map((p) => (
          <div key={p.title} className="card-glow flex gap-4 rounded-2xl bg-card p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <p.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">What customers say</h2>
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
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Sample reviews shown — replace with your real Google reviews before running ads.
        </p>
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
        On Route 25A in Mount Sinai, next to Domino's Pizza — convenient for drop-off from across
        northern Long Island.
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

function StoreInfo() {
  const hours = [
    { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "11:00 AM – 6:00 PM" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Visit the store</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card-glow overflow-hidden rounded-2xl bg-background">
            <iframe
              title="iFixScreens Mount Sinai map"
              src="https://www.google.com/maps?q=271-11+Route+25A+Mount+Sinai+NY+11766&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
          <div className="card-glow rounded-2xl bg-background p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <MapPin className="h-5 w-5 text-primary" />
              iFixScreens — Mount Sinai
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{ADDRESS}</p>
            <p className="mt-1 text-sm text-muted-foreground">Next to Domino's Pizza on Route 25A.</p>

            <h4 className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
              <Clock className="h-4 w-4" />
              Store hours
            </h4>
            <ul className="mt-2 space-y-1 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm font-semibold text-primary">Walk-ins always welcome.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl bg-primary px-6 py-3 text-center font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                Get Directions
              </a>
              <a
                href={PHONE_TEL}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 font-bold transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-primary" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Get a free quote</h2>
        <p className="mt-3 text-center text-muted-foreground">
          Tell us what's broken — we'll reply fast with a price and repair time. Or just walk in!
        </p>
        {sent ? (
          <div className="card-glow mt-10 rounded-2xl bg-background p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">Request received!</h3>
            <p className="mt-2 text-muted-foreground">
              We'll be in touch shortly. Need us faster? Call{" "}
              <a href={PHONE_TEL} className="font-bold text-primary">
                {PHONE_DISPLAY}
              </a>{" "}
              or visit us at {ADDRESS}.
            </p>
          </div>
        ) : (
          <form
            className="card-glow mt-10 space-y-4 rounded-2xl bg-background p-6 sm:p-8"
            action={`mailto:mountsinai@ifixscreens.com`}
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
          <span className="font-display text-lg font-bold text-foreground">iFixScreens</span>
        </div>
        <p>
          Device repair · {ADDRESS} ·{" "}
          <a href={PHONE_TEL} className="text-primary">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>Mon–Sat 10am–7pm · Sun 11am–6pm · Walk-ins welcome</p>
        <p>© {new Date().getFullYear()} iFixScreens. All rights reserved.</p>
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
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 font-bold"
        >
          <Phone className="h-4 w-4 text-primary" />
          Call
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-bold text-primary-foreground"
        >
          <MapPin className="h-4 w-4" />
          Directions
        </a>
      </div>
    </div>
  );
}
