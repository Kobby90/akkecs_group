export default function Privacy() {
  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
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
              At Conxeptcubes Technologies, we take your privacy seriously. This Privacy Policy explains how we
              collect, use, share, and protect your personal information when you visit our website or engage with
              our services. It is prepared in compliance with the Data Protection Act, 2012 (Act 843) of Ghana.
            </p>
            <p className="text-slate-400">
              By using our website or services, you acknowledge that you have read and understood this Privacy
              Policy. If you have any questions, contact us at{' '}
              <a href="mailto:compliance@conxeptcubes.com" className="text-blue-400 hover:text-blue-300 no-underline border-b border-blue-400/30 hover:border-blue-300">
                compliance@conxeptcubes.com
              </a>.
            </p>

            {/* Section 01 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">01</span>
              Information We Collect
            </h2>
            <p className="text-slate-400 font-semibold">Information you provide directly, including:</p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                'Full name and job title',
                'Business email address and phone number',
                'Company name and industry',
                'Communication preferences',
                'Messages, enquiries, or feedback you send us',
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 font-semibold mt-6">Information collected automatically when you visit our website:</p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                'IP address and approximate location',
                'Browser type and operating system',
                'Pages visited and time spent on each page',
                'Referring URL and device information',
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 mt-4">
              This technical data is collected through cookies and similar technologies. See Section 05 for details on how we use cookies.
            </p>
            <p className="text-slate-400">
              We also receive <strong className="text-slate-300">information from third parties</strong>, such as publicly available sources or business
              partners, handled in accordance with this Policy.
            </p>

            {/* Section 02 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">02</span>
              How We Use Your Information
            </h2>
            <p className="text-slate-400">We use your information to:</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Respond to your enquiries and requests',
                'Provide and improve our technology services',
                'Schedule meetings, demos, or consultations',
                'Send you updates about our services (where you have given consent)',
                'Analyse how visitors use our website to improve its content and performance',
                'Comply with applicable Ghanaian laws and regulations, including Act 843',
                'Enforce our Terms of Service and protect our legal rights',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 mt-6">
              <p className="text-blue-100 m-0 text-base">
                We do not sell, rent, or trade your personal information to any third party for their own marketing purposes.
              </p>
            </div>

            {/* Section 03 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">03</span>
              Sharing Your Information
            </h2>
            <p className="text-slate-400">We share your information only in the following circumstances:</p>
            <div className="space-y-4">
              {[
                {
                  title: 'Service providers',
                  desc: 'Carefully selected technology partners who process data on our behalf under written agreements with equivalent data protection obligations.',
                },
                {
                  title: 'Professional advisers',
                  desc: 'Legal, financial, or compliance advisers where strictly necessary and subject to confidentiality.',
                },
                {
                  title: 'Legal obligations',
                  desc: 'Where required by Ghanaian law, court order, or a lawful request from the Data Protection Commission.',
                },
                {
                  title: 'Business transfers',
                  desc: 'In the event of a merger or acquisition, with notice provided before your data becomes subject to a different policy.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">{item.title}</span>
                    <span className="text-slate-400"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 04 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">04</span>
              Information Security
            </h2>
            <p className="text-slate-400">
              We implement appropriate technical and organisational measures to protect your personal information
              against unauthorised access, loss, destruction, alteration, or unlawful disclosure. These include:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                'Encryption of data in transit (TLS) and at rest (AES-256)',
                'Role-based access controls and multi-factor authentication',
                'Regular security reviews and staff training',
                'Documented incident response procedures',
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 mt-4">
              If a personal data breach occurs that is likely to affect your rights, we will notify you and the
              Data Protection Commission as required by Section 31 of Act 843.
            </p>

            {/* Section 05 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">05</span>
              Cookies
            </h2>
            <p className="text-slate-400">
              Our website uses cookies to improve your experience and understand how visitors use our site. We use:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Essential cookies', desc: 'Required for the site to function.' },
                { name: 'Analytical cookies', desc: 'Help us understand visitor behaviour in aggregate.' },
                { name: 'Preference cookies', desc: 'Remember your settings and choices.' },
                { name: 'Marketing cookies', desc: 'Used only where you have given consent.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.name}</span>
                    <p className="text-slate-400 text-sm m-0 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-4">
              You can manage cookie preferences through your browser settings or any consent banner on our website.
            </p>

            {/* Section 06 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">06</span>
              Data Retention
            </h2>
            <p className="text-slate-400">We retain your personal information only for as long as necessary:</p>
            <div className="space-y-3">
              {[
                { label: 'Enquiries and correspondence', period: 'Up to 24 months from last contact' },
                { label: 'Client and contractual records', period: 'Duration of engagement plus 7 years' },
                { label: 'Website analytics', period: 'Up to 36 months in aggregated form' },
                { label: 'Marketing preferences', period: 'Until you withdraw consent or request deletion' },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700 gap-4">
                  <span className="text-slate-300 font-medium">{item.label}</span>
                  <span className="text-blue-400 text-sm text-right flex-shrink-0">{item.period}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-4">
              When data is no longer required, it is securely deleted or anonymised.
            </p>

            {/* Section 07 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">07</span>
              Your Rights
            </h2>
            <p className="text-slate-400">Under the Data Protection Act, 2012 (Act 843), you have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Access', desc: 'Your personal information we hold.' },
                { title: 'Correct', desc: 'Any inaccurate or incomplete information.' },
                { title: 'Request deletion', desc: 'Where there is no overriding legal basis to retain it.' },
                { title: 'Object', desc: 'To processing where not required by law or contract.' },
                { title: 'Withdraw consent', desc: 'At any time where processing is based on consent.' },
                { title: 'Lodge a complaint', desc: 'With the Data Protection Commission of Ghana.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.title}</span>
                    <p className="text-slate-400 text-sm m-0 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-4">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:compliance@conxeptcubes.com" className="text-blue-400 hover:text-blue-300 no-underline border-b border-blue-400/30 hover:border-blue-300">
                compliance@conxeptcubes.com
              </a>. We will respond within 40 days as required by Section 35(10) of Act 843.
            </p>

            {/* Section 08 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">08</span>
              International Data Transfers
            </h2>
            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6">
              <p className="text-blue-100 m-0 text-base">
                Where personal data is transferred outside Ghana, we ensure appropriate safeguards are in place in
                accordance with Section 30(4) of Act 843 and the ECOWAS Supplementary Act on Personal Data Protection.
              </p>
            </div>

            {/* Section 09 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">09</span>
              Children&apos;s Privacy
            </h2>
            <p className="text-slate-400">
              Our website and services are intended for business professionals and are not directed at children
              under 18. We do not knowingly collect personal information from children. Contact us at{' '}
              <a href="mailto:compliance@conxeptcubes.com" className="text-blue-400 hover:text-blue-300 no-underline border-b border-blue-400/30 hover:border-blue-300">
                compliance@conxeptcubes.com
              </a>{' '}
              if you believe we have done so.
            </p>

            {/* Section 10 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">10</span>
              Changes to This Policy
            </h2>
            <p className="text-slate-400">
              We may update this Policy from time to time. When we do, we will revise the effective date below.
              For material changes, we will provide notice through our website or by email.
            </p>

            {/* Section 11 */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400 text-sm">11</span>
              Contact Us
            </h2>
            <p className="text-slate-400">
              If you have any questions about this Privacy Policy or how we handle your data:
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-300 m-0">
                <span className="font-semibold text-white">Email: </span>
                <a href="mailto:compliance@conxeptcubes.com" className="text-blue-400 hover:text-blue-300 no-underline border-b border-blue-400/30 hover:border-blue-300">
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