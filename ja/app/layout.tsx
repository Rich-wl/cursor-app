import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TopBannerAd, TopBannerSpacer, SidebarAd } from './components/Advertisements'
import { siteConfig } from "../config/site";
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Cursor 履歴バージョンダウンロード',
    template: '%s | Cursor 履歴バージョンダウンロード'
  },
  description: 'Cursor 履歴バージョンダウンロード、Cursorの最新バージョンをダウンロード、AIベースのスマートプログラミングツール、Windows、macOSおよびLinuxプラットフォーム対応',
  keywords: ['Cursor', 'Cursor 履歴バージョンダウンロード', 'プログラミングツール', 'AIプログラミング', 'コードエディター', '開発ツール'],
  authors: [{ name: 'Cursor' }],
  creator: 'Cursor',
  publisher: 'Cursor',
  openGraph: {
    title: 'Cursor 履歴バージョンダウンロード',
    description: 'Cursorの最新バージョンをダウンロード、AIベースのスマートプログラミングツール、Windows、macOSおよびLinuxプラットフォーム対応',
    url: 'https://cursorhistory.com',
    siteName: 'Cursor 履歴バージョンダウンロード',
    locale: 'ja_JP',
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
    <html lang="ja">
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
