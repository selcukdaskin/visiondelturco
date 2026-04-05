'use client';

import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.col1Links[0], href: '#services' },
    { label: t.col1Links[1], href: '#services' },
    { label: t.col1Links[2], href: '#services' },
    { label: t.col1Links[3], href: '#services' },
  ];

  const companyLinks = [
    { label: t.col2Links[0], href: '#benefits' },
    { label: t.col2Links[1], href: '#' },
  ];

  return (
    <footer className="relative border-t border-[rgba(30,58,138,0.15)] overflow-hidden" style={{ background: 'linear-gradient(to bottom, #F8F5F0, #EDE8DF)' }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(37,99,235,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(37,99,235,0.25)]">
                VT
              </div>
              <span className="font-bold text-xl text-[#0b0f1a] tracking-tight">
                Vision<span className="gradient-text">Del</span>Turco
              </span>
            </a>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">{t.desc}</p>
            {/* Social links */}
            <div className="flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/visiondelturco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-9 h-9 rounded-xl bg-[rgba(11,15,26,0.05)] border border-[rgba(11,15,26,0.08)] flex items-center justify-center text-[#9ca3af] transition-all duration-200 hover:scale-110 hover:text-[#0077b5] hover:border-[rgba(0,119,181,0.3)] hover:shadow-[0_0_12px_rgba(0,119,181,0.25)] hover:bg-[rgba(0,119,181,0.06)]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/visiondelturco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group relative w-9 h-9 rounded-xl bg-[rgba(11,15,26,0.05)] border border-[rgba(11,15,26,0.08)] flex items-center justify-center text-[#9ca3af] transition-all duration-200 hover:scale-110 hover:text-white hover:border-transparent overflow-hidden"
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
                />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-[#1e3a8a] font-bold text-sm uppercase tracking-wider mb-5">{t.col1}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9ca3af] hover:text-[#1e3a8a] text-sm transition-colors duration-200 flex items-center gap-2 group relative"
                  >
                    <span className="w-3 h-px bg-[rgba(37,99,235,0.3)] group-hover:w-5 transition-all duration-200" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1e3a8a] after:transition-all after:duration-200 group-hover:after:w-full">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-[#1e3a8a] font-bold text-sm uppercase tracking-wider mb-5">{t.col2}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9ca3af] hover:text-[#1e3a8a] text-sm transition-colors duration-200 flex items-center gap-2 group relative"
                  >
                    <span className="w-3 h-px bg-[rgba(37,99,235,0.3)] group-hover:w-5 transition-all duration-200" />
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1e3a8a] after:transition-all after:duration-200 group-hover:after:w-full">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-[#1e3a8a] font-bold text-sm uppercase tracking-wider mb-5">{t.col3}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${t.email}`}
                  className="flex items-start gap-3 text-[#9ca3af] hover:text-[#1e3a8a] text-sm transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[rgba(37,99,235,0.06)] border border-[rgba(37,99,235,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[rgba(37,99,235,0.3)]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                      <rect x="1" y="2.5" width="10" height="7" rx="1" />
                      <path d="M1 3.5l5 3.5 5-3.5" />
                    </svg>
                  </div>
                  {t.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[rgba(30,58,138,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9ca3af]">
          <span>&copy; {year} VisionDelTurco. {t.rights}</span>
          <div className="flex items-center gap-1 text-[#b0b8c4]">
            <span>Powered by</span>
            <span className="gradient-text font-semibold">AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
