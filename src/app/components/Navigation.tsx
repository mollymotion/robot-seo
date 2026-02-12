'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Robot SEO' },
  { href: '/how-it-works', label: 'How It Works' },
  { 
    label: 'AI Visibility', 
    dropdown: [
      { href: '/ai-recommendations', label: 'Get Recommended by AI' },
      { href: '/what-is-llm-seo', label: 'What Is LLM SEO?' },
      { href: '/why-are-my-website-leads-dropping', label: 'Why Are My Website Leads Dropping?' },
      { href: '/for-service-businesses', label: 'For Service Businesses' },
    ]
  },
  { href: '/technical-standards', label: 'Standards' },
  { href: '/faq-and-limits', label: 'FAQ' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isDropdownItemActive = (dropdown: any[]) => {
    return dropdown.some(item => pathname === item.href);
  };

  return (
    <nav 
      role="navigation" 
      aria-label="Main navigation"
      className="sticky top-0 z-50 pt-8 mb-16 pb-8 border-b"
      style={{ borderColor: '#000000', backgroundColor: '#d4dcf7' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link href="/">
            <Image
              src="/images/R-seo-icon.png"
              alt="Robot SEO Icon"
              width={32}
              height={32}
            />
          </Link>
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`${
                      isDropdownItemActive(item.dropdown)
                        ? 'font-500'
                        : ''
                    } text-lg font-medium tracking-tight leading-relaxed flex items-center gap-1`}
                    style={{ color: '#000000' }}
                    aria-expanded={dropdownOpen}
                  >
                    {item.label}
                    <span className="text-sm">▼</span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-1 z-10">
                      <div 
                        className="bg-white rounded-md min-w-64"
                        style={{ border: '2px solid #d4dcf7' }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`${
                              pathname === dropdownItem.href
                                ? 'font-500 bg-gray-50'
                                : ''
                            } block px-4 py-3 text-sm font-medium tracking-tight hover:bg-gray-50`}
                            style={{ color: '#000000' }}
                            aria-current={pathname === dropdownItem.href ? 'page' : undefined}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? 'font-500'
                      : ''
                  } ${
                    item.href === '/' 
                      ? 'text-2xl font-semibold -ml-4' 
                      : 'text-lg font-medium'
                  } ${
                    item.href === '/how-it-works'
                      ? '-ml-1'
                      : ''
                  } tracking-tight leading-relaxed`}
                  style={{ color: '#000000' }}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        <Link href="/contact" className="cta-primary">
          Request an Evaluation
        </Link>
      </div>
    </nav>
  );
}