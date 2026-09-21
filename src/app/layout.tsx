import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Foco Steam IPTV | Mais de 6.000 séries e filmes em HD, FHD e 4K",
    template: "%s | Foco Steam IPTV",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "IPTV",
    "IPTV Brasil",
    "lista IPTV",
    "assinar IPTV",
    "séries online",
    "filmes online",
    "canais abertos e fechados",
    "IPTV 4K",
    "Foco Steam",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NAME,
    title: "Foco Steam IPTV | Mais de 6.000 séries e filmes",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/img/hero-bg.png",
        width: 1426,
        height: 763,
        alt: "Casal assistindo série de TV pela Foco Steam IPTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foco Steam IPTV | Mais de 6.000 séries e filmes",
    description: SITE_DESCRIPTION,
    images: ["/img/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#2e1065",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
