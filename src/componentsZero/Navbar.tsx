import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Seva', href: '/seva' },
  { label: 'Educate', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="h-[12vh] min-h-[80px] w-full bg-white shadow-sm sticky top-0 z-50 flex items-center px-4 md:px-8">
      <nav className="w-full flex items-center justify-between">
        
        {/* Left: Brand Logo (Auto-Adjustable) */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image 
              src="/images/logo/iskcon-asansol-logo.svg" 
              alt="ISKCON Logo" 
              fill 
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div className="hidden sm:block font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            <span className="block text-lg text-orange-600">ISKCON</span>
            <span className="block text-xs text-neutral-600 uppercase tracking-widest">Outreach</span>
          </div>
        </Link>

        {/* Center/Right: Flexible Dynamic Navigation Links */}
        <div className="flex items-center space-x-6 lg:space-x-8">
          <ul className="hidden md:flex flex-row items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.href} className="list-none">
                <Link 
                  href={item.href}
                  className="text-neutral-700 hover:text-orange-600 font-bold text-xl lg:text-2xl transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Button: Vaishnava Calendar */}
          <Link href="/iskcon/vaishnava-calendar" className="flex-shrink-0">
            <Button
              variant="outline"
              className="bg-orange-600 hover:bg-orange-700 text-white uppercase text-xs tracking-wider font-semibold border-none shadow-md transition-all hover:shadow-lg"
            >
              Vaishnava Calendar
            </Button>
          </Link>
        </div>

      </nav>
    </header>
  );
}