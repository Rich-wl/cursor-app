import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './globals.css';
import { TopBannerAd, TopBannerSpacer, SidebarAd } from './components/Advertisements'
import Script from 'next/script';
import { siteConfig } from "../config/site";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Cursor Historische Versionen Download',
    template: '%s | Cursor Historische Versionen Download'
  },
  description: 'Cursor Historische Versionen Download, laden Sie die neueste Cursor-Version herunter, ein KI-basiertes intelligentes Programmiertool, das Windows-, macOS- und Linux-Plattformen unterstützt',
  keywords: ['Cursor', 'Cursor Historische Versionen Download', 'Programmierungstools', 'AI-Programmierung', 'Code-Editor', 'Entwicklungstools'],
  authors: [{ name: 'Cursor' }],
  creator: 'Cursor',
  publisher: 'Cursor',
  openGraph: {
    title: 'Cursor Historische Versionen Download',
    description: 'Offizielle deutsche Seite für Cursor historische Versionen Download. Laden Sie einfach alle Versionen der Cursor IDE herunter.',
    url: 'https://ge.cursorhistory.com',
    siteName: 'Cursor Historische Versionen Download',
    images: [
      {
        url: '/images/cursor-og.png',
        width: 1200,
        height: 630,
        alt: 'Cursor Historische Versionen Download',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ge.cursorhistory.com',
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-DE">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4633597437741439" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4633597437741439"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0JKE59HPK5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0JKE59HPK5');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <TopBannerAd />
        <div className="flex min-h-screen flex-col">
          <TopBannerSpacer />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <SidebarAd />
      </body>
    </html>
  )
}
