"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModuleSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const slides: ModuleSlide[] = [
  {
    id: 1,
    title: "12+ Integrated Modules",
    description: "Assexure X is a powerful, modular, and highly scalable multi-tier application designed to streamline pension scheme administration. Built for the modern financial landscape, it ensures a robust, cross-platform, and fault-tolerant system.",
    image: "/services.png",
    ctaText: "Learn More",
    ctaLink: "/solutions/#modules"
  },
  {
    id: 2,
    title: "Powering Digital Pension & Asset Operations",
    description: "Comprehensive software ecosystems designed to streamline operations and drive exponential growth. From Member Self-Service to H2H Automated Matching, Assexure provides everything you need to manage your pension funds effectively.",
    image: "/digital.png",
    ctaText: "Explore Features",
    ctaLink: "/solutions/#pension"
  },
  {
    id: 3,
    title: "Modern Self-Service Portal",
    description: "Empower your members with an intuitive, secure, and feature-rich self-service portal. Real-time balance tracking, contribution history, and seamless document management at their fingertips, accessible from any device.",
    image: "/selfService2.png", // This is the laptop mockup
    ctaText: "See Dashboard",
    ctaLink: "/solutions/#analytics"
  }
];

const ModuleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="relative">
          {/* Main Content Area */}
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center min-h-[500px] md:min-h-[650px]">

            {/* Text Content (Left) */}
            <div className={`transition-all duration-700 transform ${isTransitioning ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Featured Module</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl mb-6 leading-tight">
                {currentSlide.title}
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                {currentSlide.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentSlide.ctaLink}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-900 rounded-full hover:bg-blue-800 shadow-xl shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300"
                >
                  {currentSlide.ctaText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image Content (Right) */}
            <div className={`relative h-[500px] md:h-[650px] transition-all duration-700 transform ${isTransitioning ? 'opacity-0 translate-x-8 scale-95' : 'opacity-100 translate-x-0 scale-100'}`}>
              <div className="relative w-full h-full">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Subtle background decoration */}
              <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-indigo-50 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-16 flex items-center justify-between">
            {/* Dots */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-blue-900 w-10' : 'bg-slate-200 w-2.5 hover:bg-slate-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-blue-900 hover:border-blue-900 transition-all group"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-blue-900 hover:border-blue-900 transition-all group"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleSlider;
