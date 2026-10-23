export const SITE_URL = "https://device-deal-dynamo.lovable.app";
export const BUSINESS_NAME = "iFixScreens Coram";
export const PHONE_TEL = "tel:+16316338779";
export const PHONE_DISPLAY = "(631) 633-8779";
export const ADDRESS = "Middle Country Rd, Coram, NY 11727";
export const MAPS_URL = "https://share.google/R6CjlG4MKJULL1sXv";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsRepair",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  alternateName: "Coram Phone Repair Center",
  url: SITE_URL,
  telephone: PHONE_TEL.slice(4),
  priceRange: "$$",
  hasMap: MAPS_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Middle Country Rd",
    addressLocality: "Coram",
    addressRegion: "NY",
    postalCode: "11727",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 40.8746706, longitude: -72.979135 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "18:00" },
  ],
  areaServed: ["Coram", "Selden", "Middle Island", "Medford", "Centereach", "Farmingville", "Port Jefferson Station", "Mount Sinai", "Ridge", "Lake Grove"].map(
    (name) => ({ "@type": "City", name: `${name}, NY` }),
  ),
  parentOrganization: { "@type": "Organization", name: "iFixScreens", url: "https://ifixscreens.com" },
};
