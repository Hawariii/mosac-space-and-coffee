import type { Metadata } from "next";

const siteUrl = "https://mosac-cafe.vercel.app";
const title = "MOSAC - Mayor Oking Space and Coffee | Nongkrong, Kerja, dan Ngopi di Citeureup";
const description =
  "MOSAC adalah destinasi nongkrong modern di Citeureup, Bogor, yang menggabungkan coffee shop, food space, dan area produktif dengan suasana modern-industrial yang nyaman untuk work from cafe, santai, dan kumpul bersama teman.";
const keywords = [
  "cafe bogor",
  "tempat nongkrong citeureup",
  "coffee bogor",
  "mosac coffee",
];

export const seoConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "MOSAC - Mayor Oking Space and Coffee",
    title,
    description,
    images: [
      {
        url: "/images/og-mosac.svg",
        width: 1200,
        height: 630,
        alt: "MOSAC - Mayor Oking Space and Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-mosac.svg"],
  },
};
