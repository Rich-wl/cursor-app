/**
 * @description Footer组件 - 为网站添加包含法律页面链接的页脚，符合AdSense审核要求
 * @author Claude AI
 * @date 2025-01-14
 */

'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 网站信息 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Cursor Historical Version Download</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted source for Cursor editor historical versions. Download any version of the AI-powered code editor for Windows, macOS, and Linux platforms.
            </p>
            <p className="text-gray-400 text-sm">
              This website is an independent service and is not officially affiliated with Anysphere, Inc. or the Cursor editor development team.
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/versions" className="text-gray-300 hover:text-white transition-colors duration-200">
                  All Versions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="text-gray-300 hover:text-white transition-colors duration-200">
                  AI Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* 法律页面 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>
                © {currentYear} Cursor Historical Version Download. All rights reserved.
              </p>
            </div>
            
            {/* 额外信息 */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <span>Made for developers, by developers</span>
              <span className="hidden md:inline">•</span>
              <a 
                href="https://cursor.sh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-200"
              >
                Official Cursor Website
              </a>
            </div>
          </div>
        </div>

        {/* 技术信息 */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="text-center text-gray-500 text-xs">
            <p>
             Cursor History 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}