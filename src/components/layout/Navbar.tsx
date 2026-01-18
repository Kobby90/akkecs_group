"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass fixed w-full z-50 top-0 left-0 transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <Image
              src="/logo.png"
              alt="Conxeptcubes Logo"
              width={42}
              height={42}
              className="relative rounded-lg"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              CONXEPTCUBES            </span>
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
              Technologies
            </span>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-slate-500 rounded-xl hover:bg-slate-100/50 focus:outline-none transition-colors"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className={`${isOpen ? 'block animate-in slide-in-from-top-4 duration-300' : 'hidden'} w-full md:block md:w-auto mt-4 md:mt-0`} id="navbar-menu">
          <ul className="flex flex-col p-4 md:p-0 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            {['Home', 'About', 'Solutions', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block py-2 px-4 text-slate-700 dark:text-slate-200 font-semibold hover:text-blue-600 md:p-0 transition-all duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full opacity-0 md:group-hover:opacity-100"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 