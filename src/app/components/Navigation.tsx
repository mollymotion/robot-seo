'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/robot-seo', label: 'Robot SEO' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/for-service-businesses', label: 'For Service Businesses' },
  { href: '/technical-standards', label: 'Technical Standards' },
  { href: '/faq-and-limits', label: 'FAQ & Limits' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav 
      role="navigation" 
      aria-label="Main navigation"
      className="mb-16 pb-8 border-b"
      style={{ borderColor: '#000000' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? 'font-500'
                  : ''
              } text-lg font-medium tracking-tight transition-colors duration-150 leading-relaxed`}
              style={{ color: '#000000' }}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="cta-primary">
          Request an evaluation
        </Link>
      </div>
    </nav>
  );
}