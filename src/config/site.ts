export const siteConfig = {
  name: "NA-BOUDOU",
  description:
    "NA-BOUDOU — plateforme indépendante de gestion locative (biens, locataires, propriétaires, maintenance, dépenses, rapports).",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
