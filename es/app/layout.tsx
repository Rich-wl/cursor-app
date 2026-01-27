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
    default: 'Descarga de versiones históricas de Cursor',
    template: '%s | Descarga de versiones históricas de Cursor'
  },
  description: 'Descarga de versiones históricas de Cursor, descarga la última versión de Cursor, una herramienta de programación inteligente basada en IA, compatible con plataformas Windows, macOS y Linux',
  keywords: ['Cursor', 'Descarga de versiones históricas de Cursor', 'herramientas de programación', 'programación con IA', 'editor de código', 'herramientas de desarrollo'],
  authors: [{ name: 'Cursor' }],
  creator: 'Cursor',
  publisher: 'Cursor',
  openGraph: {
    title: 'Descarga de versiones históricas de Cursor',
    description: 'Descarga la última versión de Cursor, una herramienta de programación inteligente basada en IA, compatible con plataformas Windows, macOS y Linux',
    url: 'https://cursorhistory.com',
    siteName: 'Descarga de versiones históricas de Cursor',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://cursorhistory.com',
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
    <html lang="es">
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
