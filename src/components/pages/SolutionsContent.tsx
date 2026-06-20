"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useDemoModal } from '@/context/DemoContext';
import ModuleSlider from '@/components/ModuleSlider';

export default function SolutionsContent() {
  const { openDemoModal } = useDemoModal();
  return (
    <div className="bg-transparent min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6 backdrop-blur-md">
              <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase font-mono">Our Capabilities</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-6xl font-display">
              Asset Management & <span className="text-gradient">Pension Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Comprehensive software ecosystems designed to streamline operations and drive exponential growth for financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Module Slider */}
      <ModuleSlider />

      {/* Asset Management Solution */}
      <section id="modules" className="py-24 border-b border-slate-200/60 bg-transparent">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-4 rounded-2xl bg-indigo-500/10 text-indigo-650 border border-indigo-500/20 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Asset Management Software Solutions</h2>
              <p className="text-slate-650 mb-8 text-lg leading-relaxed">
                A comprehensive platform designed to streamline portfolio management, automate workflows, and enhance decision-making.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Discretionary & pooled portfolio management",
                  "Automated trade execution & reconciliation",
                  "Risk management & compliance validation",
                  "Real-time analytics & NAV calculation",
                  "Client onboarding & scheme management",
                  "Customizable approval workflows",
                  "Multi-currency & multi-asset support",
                  "Secure document management",
                  "Integration APIs for third-party systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-slate-650 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="btn-premium-primary flex items-center justify-center font-bold"
                >
                  Request Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative group perspective-1000">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform group-hover:rotate-1 transition-transform duration-700 ease-out">
                <Image
                  src="/asset-management.jpg"
                  alt="Asset Management Software"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pension Fund Solution */}
      <section className="py-24 bg-transparent border-b border-slate-200/60">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform group-hover:-rotate-1 transition-transform duration-700 ease-out">
                <Image
                  src="/pension-fund.jpg"
                  alt="Pension Fund Administration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-4 rounded-2xl bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Pension Fund Administration System</h2>
              <p className="text-slate-650 mb-8 text-lg leading-relaxed">
                End-to-end pension fund management solution that simplifies administration and enhances member services.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Member management & self-service portal",
                  "Contribution tracking & benefit processing",
                  "Automated EOD processing & NAV calculation",
                  "Regulatory compliance, logs & reporting",
                  "Bank integration (H2H) & payment allocation",
                  "Benefit eligibility & approval workflows",
                  "Automated alerts & document management",
                  "Multi-scheme & multi-employer support",
                  "Compliance dashboards & real-time alerts",
                  "Integration APIs for payroll & HR systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-slate-650 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="btn-premium-primary flex items-center justify-center font-bold"
                >
                  Explore Features
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skuulyz School Management System */}
      <section id="skuulyz" className="py-24 bg-transparent border-b border-slate-200/60">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-4 rounded-2xl bg-indigo-500/10 text-indigo-650 border border-indigo-500/20 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Skuulyz School Management System</h2>
              <p className="text-slate-650 mb-8 text-lg leading-relaxed">
                A modern, comprehensive school management ecosystem that connects administrators, teachers, students, and parents in one unified platform.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Academic & class administration",
                  "Student information system (SIS)",
                  "Teacher portals for grades & planning",
                  "Parent/Student self-service portals",
                  "Billing, fee management & tracking",
                  "Unified communication system",
                  "Role-based secure access control",
                  "Responsive mobile-optimized interface"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-slate-650 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href="https://skuulyx.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium-primary inline-flex items-center justify-center font-bold"
                >
                  Visit Live Site
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative space-y-6">
              <div className="relative group">
                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/landing.png"
                    alt="Skuulyz Landing Page"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-slate-900 text-lg font-bold">Portal Landing Page</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="relative h-[180px] rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white transform group-hover:scale-[1.03] transition-transform duration-500">
                    <Image
                      src="/admin-dash.png"
                      alt="Skuulyz Admin Dashboard"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-4 text-slate-900 text-xs font-bold">School Admin Dashboard</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="relative h-[180px] rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white transform group-hover:scale-[1.03] transition-transform duration-500">
                    <Image
                      src="/parent.png"
                      alt="Skuulyz Parent Portal"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-4 text-slate-900 text-xs font-bold">Parent Portal Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services Solution */}
      <section className="py-24 bg-transparent">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-4 rounded-2xl bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Financial Analytics & Data Services</h2>
              <p className="text-slate-650 mb-8 text-lg leading-relaxed">
                A powerful analytics platform for fetching equity and GoG bond prices, running stock price analytics, and integrating real-time data into your core applications.
              </p>
              <ul className="space-y-4">
                {[
                  "Fetch equity and GoG bond prices",
                  "Stock price analytics and visualization tools",
                  "API integration for core applications",
                  "Real-time and historical market data access",
                  "Seamless analysis and reporting for users"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-cyan-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-slate-650 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="btn-premium-primary flex items-center justify-center font-bold"
                >
                  See It In Action
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/analytics.jpg"
                  alt="Analytics Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200/60">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 md:text-4xl font-display">Why Choose FINTRIVORA?</h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group glowing-card p-8 rounded-2xl relative">
              <div className="glowing-card-glow"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-650 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-indigo-600 transition-colors">Advanced Analytics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Real-time insights, customizable reports, audit trails, and compliance validation.
                </p>
              </div>
            </div>
            <div className="group glowing-card p-8 rounded-2xl relative">
              <div className="glowing-card-glow"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-cyan-600 transition-colors">Enterprise Security</h3>
                <p className="text-slate-600 leading-relaxed">
                  Role-based access, two-factor authentication, audit logging, and regulatory compliance.
                </p>
              </div>
            </div>
            <div className="group glowing-card p-8 rounded-2xl relative">
              <div className="glowing-card-glow"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-650 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-indigo-600 transition-colors">Seamless Integration</h3>
                <p className="text-slate-600 leading-relaxed">
                  Automated workflows, EOD/NAV processing, H2H bank integration, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <div className="max-w-screen-md mx-auto px-6 py-16">
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 text-center shadow-md backdrop-blur-md relative">
          <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl opacity-50 blur-sm pointer-events-none"></div>
          <span className="text-xl font-medium text-slate-700 relative z-10">
            All solutions can be <span className="font-bold text-indigo-600">custom made</span> and <span className="font-bold text-indigo-600">configured</span> to suit your organization&apos;s unique needs.
          </span>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60 relative text-center overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl tracking-tight font-display">
            Ready to evolve?
          </h2>
          <p className="mb-10 text-xl text-slate-650 max-w-2xl mx-auto">
            Get in touch to learn how our solutions can help your organization thrive.
          </p>
          <Link
            href="/contact"
            className="btn-premium-primary inline-flex items-center justify-center font-bold"
          >
            Start Conversation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
