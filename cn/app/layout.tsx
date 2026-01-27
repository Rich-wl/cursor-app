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
    default: 'Cursor 历史版本下载',
    template: '%s | Cursor 历史版本下载'
  },
  description: 'Cursor 历史版本下载，下载Cursor最新版本，一款基于AI的智能编程工具，支持Windows、macOS和Linux平台',
  keywords: ['Cursor', 'Cursor 历史版本下载', '编程工具', 'AI编程', '代码编辑器', '开发工具'],
  authors: [{ name: 'Cursor' }],
  creator: 'Cursor',
  publisher: 'Cursor',
  openGraph: {
    title: 'Cursor  历史版本下载',
    description: '下载Cursor最新版本，一款基于AI的智能编程工具，支持Windows、macOS和Linux平台',
    url: 'https://cursorhistory.com',
    siteName: 'Cursor 历史版本下载',
    locale: 'zh_CN',
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
    <html lang="zh-CN">
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

        {/* ========== 原左侧广告容器（已由全局 SidebarAd 替代） ==========
        <div className="hidden lg:block fixed left-0 top-1/2 transform -translate-y-1/2 z-10">
          <div className="flex flex-col space-y-4">
            <div className="ml-2">
              <a href="https://www.hostg.xyz/aff_c?offer_id=6&aff_id=148530&file_id=1357">
                <img
                  src="https://media.go2speed.org/brand/files/hostinger/6/EN-300x600.jpg"
                  width={180}
                  height={360}
                  alt="Hostinger"
                  className="w-[180px] h-auto shadow-lg"
                />
              </a>
            </div>
            <div className="ml-2">
              <div className="w-[180px] h-[250px] bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow-lg">
                <h3 className="text-sm font-bold text-gray-800 mb-1">广告位招租</h3>
                <a href="mailto:cursor@cursorhistory.com" className="text-xs text-gray-700">cursor@cursorhistory.com</a>
              </div>
            </div>
          </div>
        </div>
        ========== 原左侧广告容器 ========== */}
      </body>
    </html>
  )
}
