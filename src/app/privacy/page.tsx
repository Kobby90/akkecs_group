export default function Privacy() {
  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transparency is key to our relationship. Learn how we collect, use, and protect your data.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-slate-300">
              At AKKECS TECHNOLOGIES, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
            </p>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">01</span>
              Information We Collect
            </h2>
            <p className="text-slate-400">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                'Name and contact information',
                'Company details',
                'Communication preferences',
                'Information about your use of our services'
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">02</span>
              How We Use Your Information
            </h2>
            <p className="text-slate-400">
              We use the information we collect to:
            </p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Provide and improve our services',
                'Communicate with you about our products and services',
                'Respond to your inquiries and requests',
                'Comply with legal obligations'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">03</span>
              Information Security
            </h2>
            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6">
              <p className="text-blue-100 m-0 text-base">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
              </p>
            </div>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">04</span>
              Your Rights
            </h2>
            <p className="text-slate-400">
              You have the right to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Access your personal information',
                'Correct inaccurate information',
                'Request deletion of your information',
                'Object to processing of your information'
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">05</span>
              Contact Us
            </h2>
            <p className="text-slate-400">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@akkecs.com" className="text-blue-400 hover:text-blue-300 no-underline border-b border-blue-400/30 hover:border-blue-300">privacy@akkecs.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 