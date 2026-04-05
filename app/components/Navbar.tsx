'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/app/context/LangContext';
import { translations, Lang } from '@/app/lib/translations';

const LANGS: Lang[] = ['en', 'tr', 'ru'];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.services, href: '#services' },
    { label: t.process, href: '#process' },
    { label: t.benefits, href: '#benefits' },
    { label: t.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(248,245,240,0.94)] backdrop-blur-xl border-b border-[rgba(11,15,26,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              VT
            </div>
            <span className="font-bold text-lg tracking-tight text-[#0b0f1a]">
              Vision<span className="gradient-text">Del</span>Turco
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm text-[#6b7280] hover:text-[#0b0f1a] rounded-lg hover:bg-[rgba(11,15,26,0.05)] transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Lang switcher + CTA */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-[rgba(11,15,26,0.05)] rounded-full p-1 border border-[rgba(11,15,26,0.07)]">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    lang === l
                      ? 'bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white shadow-[0_0_10px_rgba(37,99,235,0.3)]'
                      : 'text-[#6b7280] hover:text-[#0b0f1a]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="mailto:visiondelturco@gmail.com"
              className="hidden sm:inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg"
            >
              {t.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-[#6b7280] hover:text-[#0b0f1a]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-6 space-y-1 border-t border-[rgba(11,15,26,0.08)] pt-4 bg-[#F8F5F0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#374151] hover:text-[#0b0f1a] hover:bg-[rgba(11,15,26,0.04)] rounded-xl transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {/* Mobile lang switcher */}
            <div className="flex items-center gap-2 px-4 pt-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMenuOpen(false); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase border transition-all ${
                    lang === l
                      ? 'bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white border-[#1e3a8a]'
                      : 'text-[#6b7280] border-[rgba(11,15,26,0.15)] hover:text-[#0b0f1a]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="px-4 pt-2">
              <a
                href="mailto:visiondelturco@gmail.com"
                className="block text-center btn-gold px-5 py-3 rounded-xl text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
