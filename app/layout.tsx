import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import BreadcrumbFromPath from "@/components/seo/BreadcrumbFromPath";
import {
  buildSiteDescription,
  buildSiteTitle,
  getPageSiteContext,
} from "@/lib/site-url";

export async function generateMetadata(): Promise<Metadata> {
  const { config, baseUrl } = await getPageSiteContext();
  const title = buildSiteTitle(config);
  const description = buildSiteDescription(config);

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords: config.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
      siteName: config.neighborhood,
      images: [
        {
          url: "/Image/hero_bg_1.jpg",
          width: 1200,
          height: 630,
          alt: `${config.neighborhood} homes for sale — Dr. Jan Duffy, REALTOR®`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/Image/hero_bg_1.jpg"],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* WidgetTracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </head>
      <body>
        <BreadcrumbFromPath />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
