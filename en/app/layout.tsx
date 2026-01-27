import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './globals.css';
import { TopBannerAd, TopBannerSpacer, SidebarAd } from './components/Advertisements'
import Script from 'next/script';
import { siteConfig } from "../config/site";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Cursor历史版本下载',
    template: '%s | Cursor Historical Version Download'
  },
  description: 'Download Cursor historical versions - AI-powered code editor for Windows, macOS, and Linux. Free download of all Cursor editor versions with version rollback support. | Cursor历史版本下载',
  keywords: [
    'Cursor Historical Version Download',
    'Cursor Download',
    'Cursor Editor',
    'AI Code Editor',
    'VSCode Alternative',
    'Cursor历史版本下载',
    'Cursor下载',
    'Cursor旧版本',
    'Cursor编辑器下载',
    'AI代码编辑器'
  ],
  authors: [{ name: 'Cursor History Team' }],
  creator: 'Cursor History',
  publisher: 'Cursor History',
  openGraph: {
    title: 'Cursor Historical Version Download',
    description: 'Download Cursor historical versions - AI-powered code editor for Windows, macOS, and Linux platforms',
    url: 'https://cursorhistory.com',
    siteName: 'Cursor Historical Version Download',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://cursorhistory.com',
    languages: {
      'zh-CN': 'https://cn.cursorhistory.com',
      'en': 'https://cursorhistory.com'
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursor Historical Version Download",
    description: "Download Cursor historical versions - AI-powered code editor",
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
    <html lang="en">
      <head>
        {/* Google AdSense 验证元标签 */}
        <meta name="google-adsense-account" content="ca-pub-4633597437741439" />

        {/* 现有的 AdSense 脚本 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4633597437741439"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics (GA4) */}
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
        {/* 固定顶部横幅广告 */}
        <TopBannerAd />
        <div className="flex min-h-screen flex-col">
          {/* 横幅占位符 */}
          <TopBannerSpacer />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* 侧边栏广告 */}
        <SidebarAd />
      </body>
    </html>
  )
}
