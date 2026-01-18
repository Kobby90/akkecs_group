export default function Terms() {
  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-md">
            <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-slate-300">
              Welcome to Conxeptcubes Technologies. By accessing our website and services, you agree to these terms and conditions.
            </p>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">1</span>
              Services
            </h2>
            <p className="text-slate-400">
              Conxeptcubes Technologies provides asset management and pension fund administration solutions. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">2</span>
              User Obligations
            </h2>
            <p className="text-slate-400">
              You agree to:
            </p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Provide accurate and complete information',
                'Maintain the security of your account',
                'Comply with all applicable laws and regulations',
                'Use our services responsibly'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">3</span>
              Intellectual Property
            </h2>
            <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-xl">
              <p className="text-slate-300 m-0 text-base">
                All content, features, and functionality of our services are owned by Conxeptcubes Technologies and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">4</span>
              Limitation of Liability
            </h2>
            <p className="text-slate-400">
              Conxeptcubes Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">5</span>
              Changes to Terms
            </h2>
            <p className="text-slate-400">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">Contact</span>
            </h2>
            <p className="text-slate-400">
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@conxeptcubes.com" className="text-cyan-400 hover:text-cyan-300 no-underline border-b border-cyan-400/30 hover:border-cyan-300">legal@conxeptcubes.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 