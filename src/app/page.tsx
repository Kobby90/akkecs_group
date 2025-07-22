import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";

const heroImages = [
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
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[700px]">
        <div className="absolute inset-0">
          <ImageSlider images={heroImages} />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
            <div className="max-w-5xl">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Integrated Enterprise Systems for Asset Management and Pension Funds
              </h1>
              <p className="mb-8 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl max-w-3xl">
                Streamline your asset management and pension fund operations with our comprehensive software solutions. Built for modern financial institutions.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-colors">
                  Book a Demo
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
                <Link href="/solutions" 
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-gray-900 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Designed for modern financial institutions
            </h2>
            <p className="text-lg text-gray-600">
              Our solutions help asset managers and pension funds streamline operations, ensure compliance, and deliver better service to their clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Security Feature */}
            <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security with end-to-end encryption, role-based access control, and comprehensive audit trails.
              </p>
            </div>
            {/* Scalability Feature */}
            <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Scalable Architecture</h3>
              <p className="text-gray-600">
                Built to grow with your business, handling millions of transactions with consistent performance.
              </p>
            </div>
            {/* Compliance Feature */}
            <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 text-blue-700 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Stay compliant with automated reporting, risk management, and regulatory requirements tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Start your digital transformation today
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Book a demo to see how our solutions can transform your business operations.
            </p>
            <Link href="/contact" 
              className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 transition-colors">
              Get started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
