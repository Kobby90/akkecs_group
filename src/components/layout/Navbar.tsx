"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-screen-xl z-50 transition-all duration-300 rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/30">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-3">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-300"></div>
            <Image
              src="/logo.png"
              alt="Fintrivora Logo"
              width={65}
              height={43}
              className="relative rounded-lg object-contain"
              quality={100}
              priority
            />
          </div>
          <div className="flex flex-col leading-tight font-display">
            <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
              FINTRIVORA
            </span>
            <span className="text-[10px] font-black tracking-[0.25em] text-indigo-600 uppercase">
              Technologies
            </span>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-slate-500 rounded-xl hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors border border-slate-200/50"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <div className={`${isOpen ? 'block animate-in slide-in-from-top-4 duration-300' : 'hidden'} w-full md:block md:w-auto mt-4 md:mt-0`} id="navbar-menu">
          <ul className="flex flex-col p-4 md:p-0 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent rounded-xl bg-white/95 border border-slate-200/50 md:border-none shadow-lg md:shadow-none">
            {['Home', 'About', 'Solutions', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}/`}
                  className="block py-2 px-4 text-slate-600 hover:text-slate-950 md:p-0 transition-all duration-200 relative group font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full opacity-0 md:group-hover:opacity-100 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
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