"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Highlights",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled ? "bg-[#121212]/90 backdrop-blur-md shadow-lg shadow-purple-900/20 border-b border-white/5" : "bg-[#121212]/70 backdrop-blur-sm"}`}>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href="/"
          className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-400 hover:to-purple-500 transition-all duration-300"
        >
          DG
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-purple-400" />
              )}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <div className="block md:hidden">
            {!navbarOpen ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white transition-colors duration-200"
                onClick={() => setNavbarOpen(true)}
              >
                <Bars3Icon className="h-5 w-5" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white transition-colors duration-200"
                onClick={() => setNavbarOpen(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link, key) => {
              return (
                <li key={key}>
                  <NavLink
                    key={link.title}
                    title={link.title}
                    href={link.path}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;