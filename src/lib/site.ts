export const site = {
  name: "Aruna Allium",
  tagline: "The World Class Shallots & Scallions from Indonesia",
  phoneDisplay: "+62 813 4455 7788",
  phoneTel: "+6281344557788",
  whatsapp: "6281344557788",
  email: "export@arunaallium.id",
  address: "Jl. Raya Bayongbong, Kec. Bayongbong, Garut, West Java, Indonesia 44162",
  hours: [
    { days: "Mon – Fri", time: "8am – 5pm" },
    { days: "Sat", time: "8am – 12pm" },
    { days: "Sunday", time: "We are closed" },
  ],
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "1.5k", label: "Ha Bayongbong" },
  { value: "80+", label: "Trusted Buyers" },
  { value: "12", label: "Years Experience" },
  { value: "18", label: "Export Markets" },
];

export const products = [
  {
    slug: "shallots",
    name: "Red Shallots",
    latin: "Allium cepa var. aggregatum",
    local: "Bawang Merah",
    image: "/images/shallot.jpg",
    summary:
      "Bayongbong red shallots with tight purple-red skins, high pungency and a long storage life — the workhorse of West Java kitchens and a stable line for buyers in Bandung, Jakarta and Singapore.",
    specs: [
      ["Origin", "Bayongbong, Garut"],
      ["Size grades", "2.5–3.5 cm · 3.5–4.5 cm"],
      ["Dry matter", "18–22%"],
      ["Moisture", "Max 80% (fresh) / 14% (dried)"],
      ["Packing", "10 kg mesh · 20 kg carton"],
      ["Shelf life", "21–30 days chilled"],
      ["MOQ", "1 × 20ft FCL (~12–14 MT)"],
      ["HS code", "0703.10"],
    ],
  },
  {
    slug: "scallions",
    name: "Green Onions",
    latin: "Allium fistulosum",
    local: "Bawang Daun",
    image: "/images/scallion.jpg",
    summary:
      "Highland Garut scallions with crisp white shanks and deep green tops. Harvested at dawn around Cisurupan and Cikajang, hydro-cooled and packed the same day.",
    specs: [
      ["Origin", "Cisurupan & Cikajang, Garut"],
      ["Length", "30–40 cm bunch"],
      ["Shank", "White, 8–12 cm"],
      ["Temperature", "0–2°C chain"],
      ["Packing", "5 kg / 10 kg carton + ice"],
      ["Lead time", "Harvest to CIF 4–7 days air"],
      ["MOQ", "500 kg trial · 3 MT regular"],
      ["HS code", "0703.90"],
    ],
  },
];

export const gallery = [
  { src: "/images/farm.jpg", caption: "Shallot harvest, Bayongbong" },
  { src: "/images/field.jpg", caption: "Scallion rows at dawn" },
  { src: "/images/sorting.jpg", caption: "Hand grading by size" },
  { src: "/images/packing.jpg", caption: "Food-grade packing house" },
  { src: "/images/chill-pack.jpg", caption: "Chilled scallion cartons" },
  { src: "/images/container.jpg", caption: "Loading for export" },
  { src: "/images/market.jpg", caption: "Origin market, Garut" },
  { src: "/images/hero.jpg", caption: "Daily harvest table" },
];

export const team = [
  {
    name: "Andika Prasetyo",
    role: "Founder",
    image: "/images/team-andika.jpg",
    bio: "Third-generation shallot grower from Bayongbong. Built the packing house so village harvests could meet export grade.",
  },
  {
    name: "Laras Wulandari",
    role: "Co-Founder",
    image: "/images/team-laras.jpg",
    bio: "Leads farmer contracts, GAP training and quality systems across partner beds in Bayongbong.",
  },
  {
    name: "Rama Putra",
    role: "Export Manager",
    image: "/images/team-rama.jpg",
    bio: "Coordinates phytosanitary docs, cold chain and buyer samples for 18 destination markets.",
  },
];

export const posts = [
  {
    slug: "bayongbong-shallot-season-2026",
    date: "12 August 2026",
    title: "Bayongbong shallot crop looks tight — what buyers should lock now",
    excerpt:
      "Late rains shortened the second planting window. We expect firmer prices into Q4 and recommend covering 60–90 day positions.",
    image: "/images/farm.jpg",
  },
  {
    slug: "scallion-airfreight-playbook",
    date: "28 July 2026",
    title: "Keeping scallions green: our air-freight cold-chain playbook",
    excerpt:
      "Hydro-cooling within two hours of cut, 0–2°C cartons, and a 36-hour door-to-door window to Singapore and Hong Kong.",
    image: "/images/chill-pack.jpg",
  },
  {
    slug: "size-grades-buyers-ask",
    date: "9 June 2026",
    title: "The three size grades international kitchens actually reorder",
    excerpt:
      "2.5 cm for paste lines, 3.5 cm for retail mesh, 4.5 cm for hotel peeling. How we pack each without mixing lots.",
    image: "/images/sorting.jpg",
  },
  {
    slug: "gap-farms-cisurupan",
    date: "21 April 2026",
    title: "Why we added Cisurupan as a second highland origin",
    excerpt:
      "Highland Garut gives us a counter-season to the Bayongbong beds — and a more honest year-round program for regular buyers.",
    image: "/images/field.jpg",
  },
];

export const destinations = [
  "Singapore",
  "Malaysia",
  "Hong Kong",
  "Taiwan",
  "Japan",
  "South Korea",
  "UAE",
  "Saudi Arabia",
  "Netherlands",
  "Australia",
];
