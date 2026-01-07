import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BBonhomie Fitness | Elite Bodybuilding & Physique Coaching",
  description: "Transform your physique with the exact protocols used by a multi-title bodybuilding champion. Elite contest prep, hypertrophy blueprints, and performance nutrition.",
  keywords: ["Bodybuilding Coaching", "Contest Prep", "Online Fitness Coach", "Hypertrophy Program", "BBonhomie Fitness", "Physique Transformation"],
  authors: [{ name: "BBonhomie" }],
  openGraph: {
    title: "BBonhomie Fitness | Elite Bodybuilding & Physique Coaching",
    description: "Built by a Champion. Forged for the Elite. Access elite protocols for maximum growth.",
    url: "https://bbonhomie.com",
    siteName: "BBonhomie Fitness",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BBonhomie Fitness - Elite Coaching",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BBonhomie Fitness | Elite Bodybuilding Coaching",
    description: "Transform your physique with champion-level protocols.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${inter.variable} antialiased bg-obsidian text-steel bg-noise`}
      >
        {children}
      </body>
    </html>
  );
}
