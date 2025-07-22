import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - AKKECS',
  description: 'Learn about our mission to transform asset management and pension fund administration through innovative software solutions.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              About AKKECS
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We are a leading provider of enterprise software solutions for the financial industry, specializing in asset management and pension fund administration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-white rounded-2xl border border-blue-100 shadow-xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To empower financial institutions with cutting-edge technology solutions that streamline operations, ensure compliance, and drive growth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">Delivering innovative financial software solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">Ensuring regulatory compliance and security</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">Providing exceptional customer support</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-[320px] max-w-md rounded-2xl shadow-2xl overflow-hidden border border-blue-100 bg-white flex items-center justify-center">
                <Image
                  src="/about-mission.jpg"
                  alt="Our Mission"
                  width={500}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries to deliver cutting-edge solutions that meet evolving market needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of security and data protection for our clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">
                Building long-term relationships with our clients through trust and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to transform your business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how our solutions can help your organization thrive.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
} 