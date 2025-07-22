import Image from 'next/image';
import Link from 'next/link';

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Our Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive software solutions designed to streamline operations and drive growth for financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Asset Management Solution */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Asset Management Software</h2>
              <p className="text-gray-600 mb-6">
                A comprehensive platform designed to streamline portfolio management, automate workflows, and enhance decision-making.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Discretionary & pooled portfolio management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Automated trade execution, settlement, and reconciliation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Risk management, compliance validation, and audit trails</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Real-time analytics, reporting, and NAV calculation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Client onboarding, KYC, and scheme management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Customizable workflows and approval processes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Multi-currency and multi-asset class support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Document management and secure file storage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Integration APIs for third-party systems</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/asset-management.jpg"
                alt="Asset Management Software"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pension Fund Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px]">
              <Image
                src="/pension-fund.jpg"
                alt="Pension Fund Administration"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pension Fund Administration</h2>
              <p className="text-gray-600 mb-6">
                End-to-end pension fund management solution that simplifies administration and enhances member services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Member management, onboarding, and self-service portal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Contribution tracking, benefit processing, and eligibility validation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Automated EOD processing and NAV calculation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Regulatory compliance, audit trails, and reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Bank integration (H2H), payment allocation, and notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Benefit eligibility and approval workflows</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Automated notifications and document management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Multi-scheme and multi-employer support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Compliance dashboards and real-time alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Integration APIs for payroll and HR systems</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services Solution */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Analytics Services</h2>
              <p className="text-gray-600 mb-6">
                A powerful analytics platform for fetching equity and GoG bond prices, running stock price analytics, and integrating real-time data into your core applications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Fetch equity and GoG bond prices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Stock price analytics and visualization tools</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">API integration for core applications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Real-time and historical market data access</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">Seamless analysis and reporting for users</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/analytics.jpg"
                alt="Analytics Services"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Advanced Analytics & Reporting</h3>
              <p className="text-gray-600">
                Real-time insights, customizable reports, audit trails, and compliance validation for better decision-making.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Enterprise Security & Compliance</h3>
              <p className="text-gray-600">
                Role-based access, two-factor authentication, audit logging, and regulatory compliance across all modules.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Automation & Integration</h3>
              <p className="text-gray-600">
                Automated workflows, EOD/NAV processing, H2H bank integration, payment allocation, and notification system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Note */}
      <div className="max-w-screen-md mx-auto px-4 mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-md">
          <span className="text-lg font-semibold text-blue-800">
            All solutions can be <span className="font-bold">custom made</span> and <span className="font-bold">configured</span> to suit your organization's unique needs.
          </span>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to transform your operations?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Get in touch to learn how our solutions can help your organization thrive.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 transition-colors"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 