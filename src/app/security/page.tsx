export default function Security() {
  return (
    <div className="bg-slate-950 min-h-screen pt-32 pb-20">
      <div className="max-w-screen-lg mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-md">
            <span className="text-xs font-bold tracking-wider text-green-400 uppercase">Trust &amp; Safety</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Security <span className="text-gradient">Practices</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our commitment to protecting your data and maintaining trust.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-slate-300">
              At Conxeptcubes Technologies, security is foundational to how we build and operate. As a technology
              company entrusted with sensitive data on behalf of our clients, we hold ourselves to rigorous
              standards and continuously invest in measures to protect the confidentiality, integrity, and
              availability of data in our care.
            </p>

            {/* Data Encryption */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              Data Encryption
            </h2>
            <p className="text-slate-400">We protect data both in transit and at rest:</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'All data transmitted between your browser and our website is encrypted using TLS 1.2 or higher (HTTPS). Unencrypted HTTP connections are not accepted.',
                'Sensitive data stored on our systems is encrypted at rest using AES-256 or equivalent industry-standard algorithms.',
                'Passwords and credentials are never stored in plain text — they are hashed using modern, salted cryptographic algorithms.',
              ].map((item, i) => (
                <li key={i} className="flex items-start bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Access Controls */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Access Controls
            </h2>
            <p className="text-slate-400">We enforce strict controls to ensure data is accessible only to those who need it:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Access governed by role-based access control (RBAC) and the principle of least privilege',
                'Multi-factor authentication (MFA) required for all staff accessing production systems',
                'Access rights reviewed regularly and immediately revoked when relationships end',
                'Remote access secured through encrypted VPN connections',
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Infrastructure and Application Security */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </span>
              Infrastructure &amp; Application Security
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Secure hosting',
                  desc: 'Our infrastructure is hosted on enterprise-grade cloud platforms that maintain recognised security certifications. We conduct due diligence on all infrastructure providers.',
                },
                {
                  title: 'Network security',
                  desc: 'Our network is protected by enterprise-grade firewalls, intrusion detection systems, and network segmentation to isolate systems containing sensitive data.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start p-5 rounded-xl bg-slate-800/30 border border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-4 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">{item.title}</span>
                    <span className="text-slate-400"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-4 font-semibold">Application security — built into our development lifecycle:</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Secure coding practices and peer code review on all production changes',
                'Regular vulnerability assessments and penetration testing',
                'Critical security patches applied within 30 days of release',
                'Active monitoring of third-party dependencies for known vulnerabilities',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Monitoring and Incident Response */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              Monitoring &amp; Incident Response
            </h2>
            <p className="text-slate-400">We maintain continuous monitoring of our systems:</p>
            <ul className="space-y-3 list-none pl-0 mb-6">
              {[
                'Comprehensive audit logs are kept for all access to systems containing personal or sensitive data',
                'Automated alerts are configured to detect suspicious activity or anomalous access patterns',
                'Logs are retained for a minimum of 12 months',
              ].map((item, i) => (
                <li key={i} className="flex items-start bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 font-semibold">In the event of a security incident:</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                'We contain and investigate the breach without undue delay',
                'Affected Data Controllers are notified within 48 hours of our becoming aware, in compliance with Section 31 of the Data Protection Act, 2012 (Act 843)',
                'Every incident is reviewed post-resolution to identify root causes and prevent recurrence',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Third-Party and Vendor Security */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Third-Party &amp; Vendor Security
            </h2>
            <p className="text-slate-400">Before engaging any service provider who will access personal or confidential data, we:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Conduct documented security due diligence',
                'Require a written Data Processing Agreement with equivalent security obligations',
                'Grant access only to data strictly necessary for the services provided',
                'Review vendor compliance periodically',
              ].map((item, i) => (
                <div key={i} className="flex items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Physical Security */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Physical Security
            </h2>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Access to office areas where sensitive data is processed is restricted to authorised personnel',
                'Clear desk and clear screen policies apply in all work environments',
                'Physical documents are disposed of by cross-cut shredding',
                'Portable devices containing data are encrypted and subject to remote wipe',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Employee Security */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Employee Security
            </h2>
            <ul className="space-y-3 list-none pl-0">
              {[
                'All staff and contractors complete mandatory data protection and security awareness training before accessing any personal data',
                'Training is refreshed annually',
                'All personnel are bound by confidentiality obligations',
                'Staff are required to report any suspected security incident immediately',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Business Continuity */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              Business Continuity
            </h2>
            <ul className="space-y-3 list-none pl-0">
              {[
                'Critical systems and data are backed up regularly; backups are encrypted and stored securely',
                'Backup restoration is tested at least quarterly',
                'Our Business Continuity and Disaster Recovery Plan is documented and tested annually',
              ].map((item, i) => (
                <li key={i} className="flex items-start bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300 text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Responsible Disclosure */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Responsible Disclosure
            </h2>
            <p className="text-slate-400">
              We welcome responsible disclosure of potential vulnerabilities. If you believe you have found a
              security issue affecting our systems, please report it to us:
            </p>
            <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-6 mb-6">
              <p className="text-green-100 m-0 text-base">
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:compliance@conxeptcubes.com" className="text-green-400 hover:text-green-300 no-underline border-b border-green-400/30 hover:border-green-300">
                  compliance@conxeptcubes.com
                </a>
                <br />
                <span className="font-semibold text-white">Subject:</span>{' '}
                <span className="text-green-200">Responsible Disclosure — Security Vulnerability</span>
              </p>
            </div>
            <p className="text-slate-400">We ask that you:</p>
            <ul className="space-y-3 list-none pl-0 mb-4">
              {[
                'Describe the vulnerability clearly, including steps to reproduce it',
                'Allow us reasonable time to investigate and remediate before any public disclosure',
                'Avoid accessing, modifying, or deleting any data in the course of your research',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400">
              We commit to acknowledging valid reports within 5 business days and working with you in good faith
              to resolve the issue. We do not pursue legal action against researchers who act responsibly and
              within these guidelines.
            </p>

            {/* Compliance */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </span>
              Compliance
            </h2>
            <p className="text-slate-400">Our security programme is aligned with:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Data Protection Act, 2012 (Act 843) of Ghana',
                'ECOWAS Supplementary Act on Personal Data Protection',
                'ISO/IEC 27001 principles',
                'NIST Cybersecurity Framework',
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-green-500/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Contact
            </h2>
            <p className="text-slate-400">
              If you have questions about our security practices or wish to report a concern:
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-300 m-0">
                <span className="font-semibold text-white">Email: </span>
                <a href="mailto:compliance@conxeptcubes.com" className="text-green-400 hover:text-green-300 no-underline border-b border-green-400/30 hover:border-green-300">
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