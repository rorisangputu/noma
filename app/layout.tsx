import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.noma.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NOMA | Exceptional Coffee, Grown in Africa",
    template: "%s | NOMA",
  },
  description:
    "NOMA is a woman-led, African-founded coffee company celebrating single-origin coffee grown across the continent — starting with Uganda 001, grown on Mount Elgon.",
  keywords: [
    "NOMA",
    "African coffee",
    "single origin coffee",
    "Uganda coffee",
    "Mount Elgon coffee",
    "woman-led coffee brand",
    "South African coffee",
  ],
  authors: [{ name: "NOMA" }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "NOMA",
    title: "NOMA | Exceptional Coffee, Grown in Africa",
    description:
      "Single-origin African coffee, sourced with care and shared with the world. Discover Uganda 001, grown on Mount Elgon.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOMA — Exceptional coffee, grown in Africa.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOMA | Exceptional Coffee, Grown in Africa",
    description:
      "Single-origin African coffee, sourced with care and shared with the world.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f5efe6] text-stone-950">
        {children}
      </body>
    </html>
  );
}
