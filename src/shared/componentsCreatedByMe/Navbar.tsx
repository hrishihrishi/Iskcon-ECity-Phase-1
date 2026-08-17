'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "../../app/globals.css";
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Causes", href: "/donate" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-brand">
        <div>
          <Image src="/images/logo/ecity_logo2.png" alt="logo" width={100} height={100} className='rounded-lg' />
        </div>
          ISKCON E-City
        </div>
        
        <ul className="navbar-nav">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' 
              ? pathname === '/' 
              : pathname.startsWith(link.href);

            return (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className={isActive ? "nav-link-active" : "nav-link"}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/donate" className="donate-btn lg:w-auto md:w-auto w-full text-center mb-4">
          Donate Now
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;