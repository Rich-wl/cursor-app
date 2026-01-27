import { getAllVersions, getLatestVersion } from '@/lib/versions'
import { Suspense } from 'react'
import { Hero } from './components/Hero'
import { NavigationCard } from './components/NavigationCard'
import { Skeleton } from './components/ui/skeleton'
import { VersionCard } from './components/VersionCard'
import { VersionsTable } from './components/VersionsTable'
// import { AAdsAdvertisement } from './components/Advertisements'

// 结构化数据（支持中英文搜索）
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Cursor Editor Historical Versions",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": ["Windows", "macOS", "Linux"],
  "description": "Download historical versions of Cursor AI-powered code editor for Windows, macOS, and Linux platforms. Free download with version rollback support.",
  "url": "https://cursorhistory.com",
  "provider": {
    "@type": "Organization",
    "name": "Cursor History",
    "url": "https://cursorhistory.com"
  },
  "downloadUrl": "https://cursorhistory.com/versions",
  "softwareVersion": "Multiple versions available",
  "featureList": [
    "AI-powered code editing",
    "Intelligent code completion", 
    "Multi-platform support",
    "Historical version downloads",
    "Version rollback functionality"
  ],
  "inLanguage": ["en", "zh-CN"]
}

// 版本列表加载组件
function VersionsLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  )
}

// 异步获取版本数据的组件
async function VersionsList() {
  const versions = await getAllVersions()
  const latestVersion = await getLatestVersion()

  return (
    <>
      {latestVersion && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest version</h2>
          <VersionCard version={latestVersion} />
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-4">All versions</h2>
        <VersionsTable versions={versions} />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      {/* 添加结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* ========== 原左侧广告容器（已由全局 SidebarAd 替代） ==========
      <div className="hidden lg:block fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
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
            <img
              src="https://www.hostg.xyz/aff_i?offer_id=6&file_id=1357&aff_id=148530"
              width={0}
              height={0}
              style={{ position: 'absolute', visibility: 'hidden' }}
              alt=""
            />
          </div>
          <div className="ml-2">
            <div
              className="w-[180px] h-[250px] bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-4 flex flex-col justify-center items-center text-center shadow-lg"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">Ad Space Available</h3>
                <p className="text-xs text-blue-600 font-medium">Premium Location</p>
              </div>
              <div className="mb-4">
                <a
                  href="mailto:cursor@cursorhistory.com"
                  className="text-xs text-gray-700 hover:text-blue-600 break-words font-medium transition-colors"
                >
                  cursor@cursorhistory.com
                </a>
              </div>
              <p className="text-xs text-gray-600 leading-tight font-medium">
                Business Cooperation & Advertising Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
      ========== 原左侧广告容器 ========== */}
      
      <main className="container mx-auto px-4 py-8">
        <Hero />

      <section className="mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">About Cursor Editor</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Cursor is an AI-first code editor based on VSCode. It&apos;s designed to help developers write, understand, and improve code faster with AI assistance.
            This site provides access to all historical versions of Cursor for Windows, macOS, and Linux platforms.
          </p>
          <p>
            Whether you&apos;re looking for the latest features or need a specific version for compatibility reasons,
            you can find and download what you need from our comprehensive collection below.
          </p>
        </div>
      </section>

 

      <section className="mt-12">
        <Suspense fallback={<VersionsLoading />}>
          <VersionsList />
        </Suspense>
      </section>


      <section className="mt-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <NavigationCard
            title="Blog Articles"
            description="Discover tips, tutorials, and best practices for using Cursor Editor effectively."
            href="/blog"
          />
          <NavigationCard
            title="Tutorials"
            description="Step-by-step guides for installation, configuration, and advanced usage."
            href="/tutorials"
          />
        </div>
      </section>
    </main>
    </>
  )
}
