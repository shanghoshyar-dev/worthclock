import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

// Full local Geist package — Google subset was dropping the letter "f"
const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: AI Tools Assessment for EU Law Firms`,
    template: `%s | ${site.name}`,
  },
  description:
    "In one 45-minute call, Worthclock maps your workflows and hands you a clear plan for the AI tools that will save you real hours. Guaranteed 5 hours back every week, or your money back.",
  openGraph: {
    title: site.entity,
    description:
      "Know exactly which AI tools are worth your time. One assessment, €999, guaranteed.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${display.variable} h-full antialiased`}
    >
      <body
        className={`${GeistSans.className} min-h-full flex flex-col bg-paper text-ink`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cream focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
