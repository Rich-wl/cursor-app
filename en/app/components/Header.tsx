'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // 处理语言切换，保持当前路径
  const handleLanguageChange = (domain: string) => {
    // 提取当前路径部分（排除域名）
    const currentPath = pathname;
    // 构建新的URL，替换域名部分但保持路径不变
    const newUrl = `https://${domain}${currentPath}`;
    // 跳转到新URL
    window.location.href = newUrl;
  };

  // 处理鼠标进入事件
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    // 添加小延迟，避免鼠标在菜单项之间移动时菜单闪烁关闭
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 关闭移动端菜单（当点击链接时）
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-11 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-base md:text-2xl font-bold text-blue-600">Cursor</span>
            <span className="hidden sm:inline text-base md:text-base font-medium text-gray-600 hover:text-blue-600">Historical version download</span>
          </Link>
        </div>

        {/* 桌面导航 - 在中等屏幕及以上显示 */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-base lg:text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/versions"
            className="text-base lg:text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
          >
            Historical version
          </Link>
          <Link
            href="/blog"
            className="text-base lg:text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
          >
            Blog
          </Link>
          <Link
            href="/tutorials"
            className="text-base lg:text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
          >
            Tutorials
          </Link>
          <Link
            href="/ai-tools"
            className="text-base lg:text-base font-medium text-gray-600 transition-colors hover:text-blue-600"
          >
            AI Tools
          </Link>
          <div
            className="relative cursor-pointer"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center space-x-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md cursor-pointer"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <svg className="h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white p-1 shadow-lg focus:outline-none">
                <a
                  href="#"
                  className="flex items-center space-x-3 rounded-md bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-600 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>English</span>
                  <svg className="ml-auto h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </a>
                <a
                  onClick={() => handleLanguageChange('cn.cursorhistory.com')}
                  className="flex items-center space-x-3 rounded-md px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>中文 (Chinese)</span>
                </a>
                <a
                  onClick={() => handleLanguageChange('es.cursorhistory.com')}
                  className="flex items-center space-x-3 rounded-md px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>Español</span>
                </a>
                <a
                  onClick={() => handleLanguageChange('ja.cursorhistory.com')}
                  className="flex items-center space-x-3 rounded-md px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>Japanese</span>
                </a>
                <a
                  onClick={() => handleLanguageChange('ge.cursorhistory.com')}
                  className="flex items-center space-x-3 rounded-md px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>German</span>
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* 移动端菜单按钮 - 仅在小屏幕显示 */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 移动端菜单 - 仅在小屏幕显示且菜单打开时 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/versions"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Historical version
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/tutorials"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              Tutorials
            </Link>
            <Link
              href="/ai-tools"
              className="block py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              onClick={closeMobileMenu}
            >
              AI Tools
            </Link>
            <div className="py-2 border-t border-gray-100 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Language</span>
              </div>
              <div className="mt-2 space-y-2">
                <a
                  href="#"
                  className="flex items-center space-x-3 py-2 text-sm font-medium text-blue-600"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>English</span>
                </a>
                <a
                  onClick={() => handleLanguageChange('cn.cursorhistory.com')}
                  className="flex items-center space-x-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>中文 (Chinese)</span>
                </a>
                <a
                  onClick={() => handleLanguageChange('es.cursorhistory.com')}
                  className="flex items-center space-x-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>Español</span>
                </a>
                <a
                  onClick={() => handleLanguageChange('ja.cursorhistory.com')}
                  className="flex items-center space-x-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>Japanese</span>
                </a>
                <a
                  onClick={() => handleLanguageChange('ge.cursorhistory.com')}
                  className="flex items-center space-x-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                >
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span>German</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
