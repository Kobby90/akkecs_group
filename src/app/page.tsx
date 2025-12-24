"use client";

import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import { useDemoModal } from "@/context/DemoContext";

const heroImages = [
  // Original Images
  {
    src: "/money-2696228.jpg",
    alt: "Financial Management Dashboard"
  },
  {
    src: "/money-2696229.jpg",
    alt: "Investment Analytics"
  },
  {
    src: "/mockup.jpg",
    alt: "Systems"
  },
  {
    src: "/money.jpg",
    alt: "pension"
  },
  {
    src: "/analytics.jpg",
    alt: "analytics"
  },
  {
    src: "/analytics1.jpg",
    alt: "analytics1"
  },
  // New Premium Images
  {
    src: "/hero-dashboard.png",
    alt: "Futuristic Financial Dashboard"
  },
  {
    src: "/hero-growth.png",
    alt: "Investment Growth & Security"
  },
  {
    src: "/hero-network.png",
    alt: "Global Secure Financial Network"
  },
  {
    src: "/hero-analytics.png",
    alt: "Real-time Asset Analytics"
  }
];

export default function Home() {
  const { openDemoModal } = useDemoModal();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <ImageSlider images={heroImages} />
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/45 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-screen-xl mx-auto px-6 py-12 lg:py-24">
            <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Trusted by Global Institutions</span>
              </div>

              <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-[1.1] md:text-6xl xl:text-7xl text-white">
                Next-Gen <span className="text-gradient">Enterprise Systems</span> for Asset Management
              </h1>

              <p className="mb-10 text-lg text-slate-300 md:text-xl max-w-2xl leading-relaxed">
                Empowering modern financial institutions with streamlined operations, real-time analytics, and uncompromising security.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  onClick={openDemoModal}
                  className="btn-premium bg-blue-600 text-white hover:bg-blue-500 flex items-center justify-center">
                  Book a demo Session
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <Link href="/solutions"
                  className="btn-premium glass text-white hover:bg-white/10 flex items-center justify-center">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl tracking-tight">
              Built for the Future of Finance
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our engineering-first approach delivers the reliability and performance required by global asset managers and pension funds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Security Feature */}
            <div className="group relative p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Enterprise Security</h3>
                <p className="text-slate-600 leading-relaxed">
                  Military-grade encryption with multi-factor authentication and comprehensive audit trails for absolute data integrity.
                </p>
              </div>
            </div>

            {/* Scalability Feature */}
            <div className="group relative p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Infinite Scalability</h3>
                <p className="text-slate-600 leading-relaxed">
                  Cloud-native architecture designed to process millions of transactions with sub-millisecond latency as your AUM grows.
                </p>
              </div>
            </div>

            {/* Compliance Feature */}
            <div className="group relative p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Auto-Compliance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Real-time regulatory reporting and automated risk monitoring built into the core logic of every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta-bg.png"
            alt="CTA Background"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/60 to-slate-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto rounded-[3rem] p-12 lg:p-16 border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl">
            <h2 className="mb-6 text-4xl font-extrabold text-white md:text-5xl tracking-tight">
              Ready to evolve your operations?
            </h2>
            <p className="mb-10 text-xl text-blue-100 font-light max-w-2xl mx-auto">
              Join leading firms who have optimized their infrastructure with AKKECS.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={openDemoModal}
                className="btn-premium bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
                Schedule Demo
              </button>
              <Link href="/contact"
                className="btn-premium border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
