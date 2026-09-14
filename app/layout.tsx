import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-J0L4VFSQYH";

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
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // Stable public favicons only — Google prefers non-fingerprinted URLs
  // Request homepage reindex in Search Console after deploy.
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
        <Script id="gtag-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            try {
              var stored = localStorage.getItem('worthclock_cookie_consent');
              if (stored === 'granted') {
                gtag('consent', 'update', { analytics_storage: 'granted' });
              }
            } catch (e) {}
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
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
        <CookieConsent />
      </body>
    </html>
  );
}
