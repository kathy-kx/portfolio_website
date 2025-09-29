"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "./ThemeToggle";
import ThemeLogo from "./ThemeLogo";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Blog",
    path: process.env.NEXT_PUBLIC_BLOG_URL,
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed border-b border-border mx-auto top-0 left-0 right-0 z-20 bg-surface/90 backdrop-blur-sm">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-8 py-8">
        <Link href={"/"} className="text-2xl md:text-5xl font-semibold">
          <ThemeLogo
            width={40}
            height={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px]"
          />
        </Link>

        {/* Desktop menu and theme toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="menu md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <ThemeToggle />
        </div>

        {/* Mobile menu button and theme toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <div className="mobile-menu">
            {navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-border text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-border text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
