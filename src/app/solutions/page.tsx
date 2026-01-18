"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useDemoModal } from '@/context/DemoContext';

export default function Solutions() {
  const { openDemoModal } = useDemoModal();
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Our Capabilities</span>
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-6xl">
              Enterprise-Grade <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive software ecosystems designed to streamline operations and drive exponential growth for financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Asset Management Solution */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-3 rounded-2xl bg-blue-50 text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Asset Management Software</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                A comprehensive platform designed to streamline portfolio management, automate workflows, and enhance decision-making.
              </p>
              <ul className="space-y-4">
                {[
                  "Discretionary & pooled portfolio management",
                  "Automated trade execution, settlement, and reconciliation",
                  "Risk management, compliance validation, and audit trails",
                  "Real-time analytics, reporting, and NAV calculation",
                  "Client onboarding, KYC, and scheme management",
                  "Customizable workflows and approval processes",
                  "Multi-currency and multi-asset class support",
                  "Document management and secure file storage",
                  "Integration APIs for third-party systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  Request Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform group-hover:rotate-1 transition-transform duration-700 ease-out">
                <Image
                  src="/asset-management.jpg"
                  alt="Asset Management Software"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pension Fund Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform group-hover:-rotate-1 transition-transform duration-700 ease-out">
                <Image
                  src="/pension-fund.jpg"
                  alt="Pension Fund Administration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-3 rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Pension Fund Administration</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                End-to-end pension fund management solution that simplifies administration and enhances member services.
              </p>
              <ul className="space-y-4">
                {[
                  "Member management, onboarding, and self-service portal",
                  "Contribution tracking, benefit processing, and eligibility validation",
                  "Automated EOD processing and NAV calculation",
                  "Regulatory compliance, audit trails, and reporting",
                  "Bank integration (H2H), payment allocation, and notifications",
                  "Benefit eligibility and approval workflows",
                  "Automated notifications and document management",
                  "Multi-scheme and multi-employer support",
                  "Compliance dashboards and real-time alerts",
                  "Integration APIs for payroll and HR systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300"
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

      {/* Analytics Services Solution */}
      <section className="py-24 border-t border-slate-200">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block p-3 rounded-2xl bg-cyan-50 text-cyan-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Analytics Services</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="ml-3 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button
                  onClick={openDemoModal}
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-cyan-600 rounded-xl hover:bg-cyan-700 shadow-lg shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
                >
                  See It In Action
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white transform group-hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/analytics.jpg"
                  alt="Analytics Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">Why Choose CONXEPTCUBES?</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
              <p className="text-slate-400 leading-relaxed">
                Real-time insights, customizable reports, audit trails, and compliance validation.
              </p>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-slate-400 leading-relaxed">
                Role-based access, two-factor authentication, audit logging, and regulatory compliance.
              </p>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Seamless Integration</h3>
              <p className="text-slate-400 leading-relaxed">
                Automated workflows, EOD/NAV processing, H2H bank integration, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <div className="max-w-screen-md mx-auto px-6 py-16">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center shadow-lg">
          <span className="text-xl font-medium text-blue-900">
            All solutions can be <span className="font-bold text-blue-600">custom made</span> and <span className="font-bold text-blue-600">configured</span> to suit your organization's unique needs.
          </span>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl tracking-tight">
            Ready to evolve?
          </h2>
          <p className="mb-10 text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch to learn how our solutions can help your organization thrive.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-xl hover:bg-blue-50 shadow-lg hover:shadow-white/10 transition-all duration-300"
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