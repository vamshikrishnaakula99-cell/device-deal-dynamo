export type ServiceSlug = "iphone-repair" | "samsung-repair" | "ipad-tablet-repair" | "computer-repair" | "game-console-repair";

export interface ServiceInfo {
  slug: ServiceSlug;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  time: string;
  warranty: string;
  repairs: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: Record<ServiceSlug, ServiceInfo> = {
  "iphone-repair": {
    slug: "iphone-repair",
    name: "iPhone Repair",
    h1: "iPhone Repair in Coram, NY",
    title: "iPhone Repair Coram NY — Screen & Battery in 30 Min | iFixScreens",
    description: "Same-day iPhone screen, battery, charge port & camera repair in Coram, NY. Most fixes in 30 minutes with a 180-day warranty. Walk-ins welcome.",
    intro: "Cracked iPhone screen, battery draining fast, or phone won't charge? Our certified technicians on Middle Country Rd repair every iPhone model while you wait — most in about 30 minutes.",
    time: "About 30 minutes",
    warranty: "180-day warranty",
    repairs: ["Cracked screen & LCD/OLED replacement", "Battery replacement", "Charging port repair", "Front & rear camera repair", "Back glass replacement", "Water damage diagnostic", "Speaker & microphone repair"],
    faqs: [
      { q: "How long does an iPhone screen repair take?", a: "Most iPhone screen replacements are finished in about 30 minutes while you wait." },
      { q: "Do I need an appointment?", a: "No. Walk-ins are always welcome Monday–Saturday 10am–7pm and Sunday 11am–6pm." },
      { q: "Is my iPhone repair covered by a warranty?", a: "Yes. Parts we install carry a hassle-free 180-day warranty against manufacturing defects." },
    ],
  },
  "samsung-repair": {
    slug: "samsung-repair",
    name: "Samsung & Android Repair",
    h1: "Samsung Galaxy & Android Phone Repair in Coram, NY",
    title: "Samsung Galaxy Repair Coram NY — Same-Day | iFixScreens",
    description: "Samsung Galaxy, Google Pixel, OnePlus & Motorola repair in Coram, NY. Screens, batteries, charge ports — same-day with a 180-day warranty.",
    intro: "We repair Samsung Galaxy S, Note, A and Z series phones plus Google Pixel, OnePlus and Motorola — screens, batteries, ports and more, usually the same day.",
    time: "Same day",
    warranty: "180-day warranty",
    repairs: ["Galaxy screen replacement", "Battery replacement", "USB-C charging port repair", "Camera & lens repair", "Back glass replacement", "Software & boot issues"],
    faqs: [
      { q: "Can you fix a Samsung Galaxy screen the same day?", a: "In most cases, yes. Popular Galaxy models are usually repaired the same day." },
      { q: "Do you repair Google Pixel and OnePlus phones?", a: "Yes — we repair Google Pixel, OnePlus, Motorola and most other Android phones." },
    ],
  },
  "ipad-tablet-repair": {
    slug: "ipad-tablet-repair",
    name: "iPad & Tablet Repair",
    h1: "iPad & Tablet Repair in Coram, NY",
    title: "iPad & Tablet Repair Coram NY — 45 Min Fixes | iFixScreens",
    description: "iPad, Samsung Tab, Kindle & Lenovo tablet repair in Coram, NY. Screen, battery & charge port fixes in about 45 minutes. Free diagnostic.",
    intro: "Shattered iPad glass or a tablet that won't hold a charge? Bring it to our Coram store for a free diagnostic and a same-day repair in about 45 minutes.",
    time: "About 45 minutes",
    warranty: "180-day warranty",
    repairs: ["iPad glass & digitizer replacement", "Battery replacement", "Charging port repair", "Camera repair", "Samsung Tab, Kindle & Lenovo repair"],
    faqs: [
      { q: "How much does iPad repair cost?", a: "It depends on the model and damage. We give you a free diagnostic and an upfront price before any work begins." },
      { q: "Do you repair Amazon Kindle tablets?", a: "Yes — we repair Kindle, Samsung Tab, Lenovo Tab and Apple iPad models." },
    ],
  },
  "computer-repair": {
    slug: "computer-repair",
    name: "Computer & Mac Repair",
    h1: "Computer, Laptop & MacBook Repair in Coram, NY",
    title: "Laptop & MacBook Repair Coram NY — Free Diagnostic | iFixScreens",
    description: "MacBook, iMac, PC laptop, Surface & Chromebook repair in Coram, NY. Screens, SSD upgrades, data recovery & virus removal. Free diagnostic.",
    intro: "Laptop won't boot, cracked MacBook screen, or running slow? We diagnose for free and fix MacBooks, iMacs, Windows PCs, Surface and Chromebooks.",
    time: "Free diagnostic",
    warranty: "180-day warranty",
    repairs: ["Laptop & MacBook screen replacement", "Battery replacement", "SSD & memory upgrades", "Data recovery", "Virus & malware removal", "Motherboard repair", "Keyboard & charging port repair"],
    faqs: [
      { q: "Can you recover data from a dead laptop?", a: "Often, yes. Bring it in for a free diagnostic and we'll tell you what can be recovered." },
      { q: "Do you upgrade laptops to SSDs?", a: "Yes — SSD and memory upgrades are one of the fastest ways to speed up an older computer." },
    ],
  },
  "game-console-repair": {
    slug: "game-console-repair",
    name: "Game Console Repair",
    h1: "PS5, Xbox & Nintendo Switch Repair in Coram, NY",
    title: "PS5, Xbox & Switch Repair Coram NY | iFixScreens",
    description: "PlayStation, Xbox & Nintendo Switch repair in Coram, NY. HDMI ports, overheating, disc drives, controller drift — same-day in about 45 min.",
    intro: "No signal, overheating, or controller drift? We repair PlayStation, Xbox and Nintendo Switch consoles and controllers, usually in about 45 minutes.",
    time: "About 45 minutes",
    warranty: "180-day warranty",
    repairs: ["HDMI port repair", "Overheating & fan cleaning", "Disc drive repair", "Controller & Joy-Con drift repair", "Switch screen replacement", "Booting issues"],
    faqs: [
      { q: "Can you fix a PS5 HDMI port?", a: "Yes. HDMI port replacement is one of our most common console repairs." },
      { q: "Do you fix Joy-Con drift?", a: "Yes — we repair Joy-Con and controller stick drift for Switch, PlayStation and Xbox." },
    ],
  },
};

export const SERVICE_LIST = Object.values(SERVICES);
