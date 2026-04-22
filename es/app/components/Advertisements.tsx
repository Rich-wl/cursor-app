'use client'

import { useEffect } from 'react';

// 为window对象添加adsbygoogle属性类型定义
declare global {
  interface Window {
    adsbygoogle: Array<unknown>;
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

// ============================================
// 广告埋点工具函数
// ============================================
function trackAdEvent(action: 'view' | 'click', adName: string, adPosition: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    // 事件名格式: {站点名}_{位置}_{动作}，如 xcode_banner_view
    const eventName = `${adName.toLowerCase().replace(/[-\s]/g, '')}_${adPosition}_${action}`;
    window.gtag('event', eventName, {
      ad_name: adName,
      ad_position: adPosition,
    });
  }
}

export function AAdsAdvertisement() {
  useEffect(() => {
    // 动态创建脚本，避免 Next.js 的 hydration 问题
    const script = document.createElement('script')
    script.src = '//ad.a-ads.com/2385774?size=468x60'
    script.async = true

    // 找到广告容器并添加脚本
    const adContainer = document.getElementById('a-ads-container')
    if (adContainer) {
      // 清空容器以防止重复添加
      adContainer.innerHTML = ''

      // 创建iframe
      const iframe = document.createElement('iframe')
      iframe.setAttribute('data-aa', '2385774')
      iframe.src = '//ad.a-ads.com/2385774?size=468x60'
      iframe.style.width = '468px'
      iframe.style.height = '60px'
      iframe.style.border = '0'
      iframe.style.padding = '0'
      iframe.style.overflow = 'hidden'
      iframe.style.backgroundColor = 'transparent'

      // 创建广告链接
      const link = document.createElement('a')
      link.style.display = 'block'
      link.style.textAlign = 'right'
      link.style.fontSize = '12px'
      link.id = 'preview-link'
      link.href = 'https://aads.com/campaigns/new/?source_id=2385774&source_type=ad_unit&partner=2385774'
      link.textContent = 'Advertise here'

      // 添加到容器
      adContainer.appendChild(iframe)
      adContainer.appendChild(link)
    }
  }, [])

  return (
    <div className="flex justify-center my-6 bg-white p-4 rounded-lg shadow-sm">
      <div id="a-ads-container" style={{ width: '468px', height: 'auto' }}></div>
    </div>
  )
}

// Google AdSense 广告单元组件
export function GoogleAdsense() {
  useEffect(() => {
    // 等待AdSense脚本加载完成后尝试投放广告
    try {
      const adsbygoogle = window.adsbygoogle || []
      adsbygoogle.push({})
    } catch (e) {
      console.error("AdSense error:", e)
    }
  }, [])

  return (
    <div className="flex justify-center my-6 overflow-hidden">
      <ins className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4633597437741439"
        data-ad-slot="8819104483"></ins>
    </div>
  )
}

export function FloatingAds({ position }: { position: 'left' | 'right' }) {
  useEffect(() => {
    // 找到广告容器
    const adContainer = document.getElementById(`floating-ad-${position}`)

    // 根据位置确定不同的广告ID
    const adId = position === 'left' ? '2389613' : '2389614';

    if (adContainer) {
      // 清空容器以防止重复添加
      adContainer.innerHTML = ''

      // 创建iframe
      const iframe = document.createElement('iframe')
      iframe.setAttribute('data-aa', adId)
      iframe.src = `//ad.a-ads.com/${adId}?size=160x600`
      iframe.style.width = '160px'
      iframe.style.height = '600px'
      iframe.style.border = '0'
      iframe.style.padding = '0'
      iframe.style.overflow = 'hidden'
      iframe.style.backgroundColor = 'transparent'

      // 创建广告链接
      const link = document.createElement('a')
      link.style.display = 'block'
      link.style.textAlign = 'right'
      link.style.fontSize = '12px'
      link.id = `floating-ad-link-${position}`
      link.href = `https://aads.com/campaigns/new/?source_id=${adId}&source_type=ad_unit&partner=${adId}`
      link.textContent = 'Advertise here'

      // 添加到容器
      adContainer.appendChild(iframe)
      adContainer.appendChild(link)
    }
  }, [position])

  // 根据位置设置不同的样式
  const positionStyles = {
    left: {
      left: 0,
      right: 'auto',
    },
    right: {
      left: 'auto',
      right: 0,
    }
  }

  // 响应式显示：只在大屏幕(lg及以上)显示
  return (
    <div
      className={`hidden lg:block fixed top-1/2 transform -translate-y-1/2 z-40`}
      style={{
        ...positionStyles[position],
        marginLeft: position === 'left' ? '10px' : 'auto',
        marginRight: position === 'right' ? '10px' : 'auto',
      }}
    >
      <div id={`floating-ad-${position}`} style={{ width: '160px', height: 'auto' }}></div>
    </div>
  )
}

// 同时渲染左右两侧的悬浮广告
export function FloatingAdsContainer() {
  return (
    <>
      <FloatingAds position="left" />
      <FloatingAds position="right" />
    </>
  )
}

// ============================================
// 顶部横幅广告 (固定在最顶部，全宽)
// ============================================
export function TopBannerAd() {
  // 追踪展示次数
  useEffect(() => {
    trackAdEvent('view', 'X-Code API', 'top_banner');
  }, []);

  // 追踪点击
  const handleClick = () => {
    trackAdEvent('click', 'X-Code API', 'top_banner');
  };

  return (
    <a
      href="https://x-code.cc/register?aff=uxiW"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed top-0 left-0 right-0 z-[60] block w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-3">
        {/* Logo */}
        <img
          src="/x-code.png"
          alt="X-Code API"
          className="h-7 w-7 object-contain rounded-md"
        />
        {/* 文案 */}
        <div className="flex items-center gap-2 text-white">
          <span className="font-semibold text-sm md:text-base">X-Code API</span>
          <span className="hidden sm:inline text-white/80 text-sm">|</span>
          <span className="hidden sm:inline text-white/90 text-sm">Proxy estable de alta calidad para Claude Code + Codex</span>
        </div>
        {/* 按钮 */}
        <span className="ml-2 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs font-medium transition-colors">
          Visit →
        </span>
      </div>
    </a>
  )
}

// 横幅占位符 - 防止内容被固定横幅遮挡
export function TopBannerSpacer() {
  return <div className="h-11" />
}

// ============================================
// 侧边栏广告 (固定在左侧)
// ============================================
export function SidebarAd() {
  // 追踪展示次数
  useEffect(() => {
    trackAdEvent('view', 'X-Code API', 'sidebar');
  }, []);

  // 追踪点击
  const handleClick = () => {
    trackAdEvent('click', 'X-Code API', 'sidebar');
  };

  return (
    <div className="hidden xl:block fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      {/* X-Code API 侧边栏广告 */}
      <a
        href="https://x-code.cc/register?aff=uxiW"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="block w-[160px] bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 rounded-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      >
        <div className="p-4 flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src="/x-code.png"
            alt="X-Code API"
            className="h-16 w-16 object-contain rounded-lg mb-3"
          />
          {/* 名称 */}
          <h3 className="text-white font-bold text-lg mb-2">X-Code API</h3>
          {/* 分隔线 */}
          <div className="w-12 h-0.5 bg-white/30 mb-3"></div>
          {/* 描述 */}
          <p className="text-white/90 text-xs leading-relaxed mb-3">
            Proxy estable<br />
            de alta calidad<br />
            Claude Code<br />
            + Codex
          </p>
          {/* 按钮 */}
          <span className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-medium transition-colors">
            Visit →
          </span>
        </div>
      </a>

      {/* ========== 广告位招租（备用） ==========
      <div className="w-[160px] h-[600px] bg-white border border-dashed border-gray-300 rounded shadow-lg flex flex-col justify-center items-center text-center p-4">
        <div className="mb-4">
          <svg className="w-10 h-10 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Ad Space</h3>
        <p className="text-xs text-gray-500 mb-3">160x600</p>
        <a
          href="mailto:cursor@cursorhistory.com"
          className="text-xs text-blue-600 hover:text-blue-800 break-words"
        >
          Contact Us
        </a>
      </div>
      ========== 广告位招租（备用） ========== */}
    </div>
  )
}


