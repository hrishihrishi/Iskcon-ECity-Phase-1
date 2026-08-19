"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../app/globals.css";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Causes", href: "/donate" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar px-2 relative z-50">
      <div className="navbar-container">
        <div
          className="navbar-brand"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <div>
            <Image
              src="/images/logo/ecitylogoadobenobg.png"
              alt="logo"
              width={100}
              height={100}
              className="md:block lg:block rounded-lg"
            />
          </div>
        </div>

        <ul className="navbar-nav sm:text-[4.5vw] md:text-[2vw] lg:text-[1.5vw]">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
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

        <div className="flex flex-row items-center gap-2">
          <Link
            href="/donate"
            className="donate-btn lg:w-auto md:w-full text-center sm:text-xl md:text-2xl lg:text-2xl md:mb-4 lg:mb-4"
          >
            Donate Now
          </Link>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <ul className="md:hidden absolute top-full right-3 flex flex-col bg-[#0f4c81] text-white p-4 space-y-3 border-l-4 border-l-yellow-400 shadow-2xl rounded-b-lg z-[9999] min-w-[180px]">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={
                      isActive
                        ? "nav-link-active font-extrabold"
                        : "nav-link block pl-3 pr-3 font-extrabold"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
