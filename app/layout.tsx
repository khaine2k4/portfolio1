import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import Particles from "@/components/ui/Particles";
import Preloader from "@/components/ui/Preloader";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { LanguageProvider } from "@/lib/i18n";
import Script from "next/script";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://khaidz.com"),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
    url: "https://khaidz.com",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="noise font-sans antialiased">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HMQSL7GYB1"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HMQSL7GYB1');
          `}
        </Script>
        <LanguageProvider>
          <Preloader />
          <AmbientBackground />
          <Particles />
          <ScrollProgress />
          <CursorGlow />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

