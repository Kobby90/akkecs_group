import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <Image
                src="/logo.png"
                alt="Conxeptcubes Logo"
                width={38}
                height={38}
                className="rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight text-white">
                  CONXEPTCUBES                </span>
                <span className="text-[9px] font-black tracking-[0.2em] text-blue-500 uppercase">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering the next generation of financial institutions with secure, scalable enterprise systems.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-white transition-all group"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'twitter' ? (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    ) : (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {[
            {
              title: 'Solutions',
              items: [
                { label: 'Asset Management', href: '/solutions' },
                { label: 'Pension Admin', href: '/solutions' },
                { label: 'Analytics', href: '/solutions' }
              ]
            },
            {
              title: 'Company',
              items: [
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Industries', href: '/solutions' }
              ]
            },
            {
              title: 'Legal',
              items: [
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Security', href: '/privacy' }
              ]
            }
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-6 tracking-tight">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm hover:text-blue-500 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {section.title === 'Legal' && (
                  <li className="pt-4">
                    <a
                      href="http://www.conxeptcubes.com/webmail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Webmail Login</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs tracking-wide">
            © {new Date().getFullYear()} Conxeptcubes Technologies. Engineered for excellence.
          </p>
          <div className="flex space-x-6 text-xs font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Data Privacy</Link>
            <Link href="/security" className="hover:text-white transition-colors">System Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 