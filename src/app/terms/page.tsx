export default function Terms() {
  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-md">
            <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-slate-300">
              Welcome to Conxeptcubes Technologies. By accessing our website or engaging our services, you agree
              to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not
              use our website or services.
            </p>

            {/* Section 1 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">1</span>
              About Our Services
            </h2>
            <p className="text-slate-400">
              Conxeptcubes Technologies provides technology services including software development, systems
              integration, asset management, and pension fund administration solutions to corporate clients.
            </p>
            <p className="text-slate-400">
              We reserve the right to modify, suspend, or discontinue any part of our website or services at
              any time, with or without notice.
            </p>

            {/* Section 2 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">2</span>
              Eligibility
            </h2>
            <p className="text-slate-400">By using our website, you confirm that:</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'You are at least 18 years of age',
                'You have the legal capacity to enter into binding agreements under Ghanaian law',
                'Where acting on behalf of an organisation, you have authority to bind that entity to these Terms',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Section 3 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">3</span>
              User Obligations
            </h2>
            <p className="text-slate-400">You agree to:</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Provide accurate and complete information in any form or request submitted through our website',
                'Keep your account credentials secure and notify us immediately of any unauthorised access',
                'Use our website and services only for lawful purposes and in accordance with these Terms',
                "Comply with all applicable laws and regulations, including Ghana's Data Protection Act, 2012 (Act 843)",
                'Not attempt to gain unauthorised access to any part of our website or underlying systems',
                'Not use automated tools to scrape or extract content from our website without prior written consent',
                'Use our services responsibly and in a manner that does not harm other users or our infrastructure',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 mt-4">
              We reserve the right to suspend or terminate your access if you breach any of these obligations.
            </p>

            {/* Section 4 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">4</span>
              Intellectual Property
            </h2>
            <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-xl">
              <p className="text-slate-300 m-0 text-base">
                All content on our website — including text, graphics, logos, software, and overall design — is
                owned by Conxeptcubes Technologies or our licensors and is protected by applicable copyright,
                trademark, and intellectual property laws.
              </p>
            </div>
            <p className="text-slate-400 mt-4">
              You are granted a limited, non-exclusive, non-transferable licence to view our website content
              for personal, non-commercial informational purposes only. This licence does <strong className="text-slate-300">not</strong> include the right to:
            </p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Download, copy, or redistribute our content',
                'Modify or create derivative works from our content',
                'Use our trademarks, logos, or brand identifiers without prior written consent',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 mt-4">
              For any other use, contact us at{' '}
              <a href="mailto:compliance@conxeptcubes.com" className="text-cyan-400 hover:text-cyan-300 no-underline border-b border-cyan-400/30 hover:border-cyan-300">
                compliance@conxeptcubes.com
              </a>.
            </p>

            {/* Section 5 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">5</span>
              Third-Party Links
            </h2>
            <p className="text-slate-400">
              Our website may contain links to third-party websites. These are provided for convenience only.
              We do not endorse or accept responsibility for any third-party content, privacy practices, or
              policies. Your use of third-party sites is at your own risk.
            </p>

            {/* Section 6 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">6</span>
              Disclaimer of Warranties
            </h2>
            <div className="bg-amber-900/20 border border-amber-500/20 rounded-xl p-6">
              <p className="text-amber-100 m-0 text-base">
                Our website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest
                extent permitted by law, we disclaim all warranties, express or implied, including warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>
            <p className="text-slate-400 mt-4">
              Nothing on our website constitutes legal, financial, or professional advice. Seek independent
              professional advice before acting on any information obtained here.
            </p>

            {/* Section 7 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">7</span>
              Limitation of Liability
            </h2>
            <p className="text-slate-400">
              To the fullest extent permitted by applicable Ghanaian law, Conxeptcubes Technologies shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages arising from
              your use of, or inability to use, our website or services — including loss of profits, data, or
              business opportunities.
            </p>
            <p className="text-slate-400">
              Nothing in these Terms limits our liability for death or personal injury caused by our negligence,
              fraud, or any other liability that cannot be excluded by law.
            </p>

            {/* Section 8 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">8</span>
              Privacy
            </h2>
            <p className="text-slate-400">
              Your use of our website is governed by our Privacy Policy, incorporated into these Terms by
              reference. By using our website, you consent to the handling of your personal information as
              described therein and in accordance with the Data Protection Act, 2012 (Act 843).
            </p>

            {/* Section 9 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">9</span>
              Changes to These Terms
            </h2>
            <p className="text-slate-400">
              We reserve the right to modify these Terms at any time. We will notify users of material changes
              via our website or email. Your continued use of our website after changes are posted constitutes
              your acceptance of the revised Terms.
            </p>

            {/* Section 10 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">10</span>
              Governing Law
            </h2>
            <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-xl">
              <p className="text-slate-300 m-0 text-base">
                These Terms are governed by the laws of the Republic of Ghana. Any disputes shall first be
                referred to good-faith mediation, and if unresolved, to the jurisdiction of the courts of Ghana.
              </p>
            </div>

            {/* Section 11 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 text-cyan-400 text-sm">11</span>
              Contact
            </h2>
            <p className="text-slate-400">If you have any questions about these Terms of Service:</p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-300 m-0">
                <span className="font-semibold text-white">Email: </span>
                <a href="mailto:compliance@conxeptcubes.com" className="text-cyan-400 hover:text-cyan-300 no-underline border-b border-cyan-400/30 hover:border-cyan-300">
                  compliance@conxeptcubes.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}