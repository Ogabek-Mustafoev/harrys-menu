import { logo_img } from "@/constants";
import { HomePage } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Categories",
  description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
  keywords: "Harry's Coffee, Snacks, Burgers, Side Dishes, Drinks, Hotdogs, Menu Categories",
  openGraph: {
    siteName: "The Harry's COFFEE & SNACKS",
    title: "Menu Categories | The Harry's COFFEE & SNACKS",
    description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
    url: "https://harrys-menu.uz/categories",
    images: [
      {
        url: logo_img.src,
        width: 800,
        height: 600,
        alt: "The Harry's COFFEE & SNACKS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu Categories | The Harry's COFFEE & SNACKS",
    description: "Discover the variety of categories available at The Harry's COFFEE & SNACKS, including burgers, side dishes, drinks, and hotdogs.",
    images: [
      {
        url: logo_img.src,
        width: 800,
        height: 600,
        alt: "The Harry's COFFEE & SNACKS",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://harrys-menu.uz",
    languages: {
      en: "https://harrys-menu.uz",
    },
  },
};

export default function Home() {
  return <HomePage />
}
