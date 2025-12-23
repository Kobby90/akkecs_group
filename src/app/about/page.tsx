import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - AKKECS',
  description: 'Learn about our mission to transform asset management and pension fund administration through innovative software solutions.',
};

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
              <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Who We Are</span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-6xl">
              About <span className="text-gradient">AKKECS</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We are a leading provider of enterprise software solutions for the financial industry, specializing in asset management and pension fund administration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-[2rem] transform -rotate-2 opacity-50 blur-sm"></div>
              <div className="relative bg-white rounded-[1.5rem] border border-slate-100 shadow-xl p-10 lg:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  To empower financial institutions with cutting-edge technology solutions that streamline operations, ensure compliance, and drive growth.
                </p>
                <div className="space-y-6">
                  {[
                    "Delivering innovative financial software solutions",
                    "Ensuring regulatory compliance and security",
                    "Providing exceptional customer support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-4 text-slate-700 font-medium pt-2">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] transform rotate-3 opacity-10"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/about-mission.jpg"
                  alt="Our Mission"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">Our Core Values</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-lg">The principles that guide our innovation and service.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "Continuously pushing boundaries to deliver cutting-edge solutions that meet evolving market needs.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Security",
                desc: "Maintaining the highest standards of security and data protection for our clients.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Partnership",
                desc: "Building long-term relationships with our clients through trust and collaboration.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready to transform your business?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Let's discuss how our solutions can help your organization thrive in the digital age.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
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