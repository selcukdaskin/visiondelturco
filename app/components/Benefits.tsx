'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

const ICONS = [
  /* 0 — Lightning bolt (Fast Delivery) */
  <svg key={0} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  /* 1 — Shield + check (Secure Solutions) */
  <svg key={1} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  /* 2 — Bar chart (Data-Driven) */
  <svg key={2} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>,
  /* 3 — Trending up (Efficient Results) */
  <svg key={3} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
  /* 4 — Lightbulb (Innovative Approach) */
  <svg key={4} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2A2 2 0 0 0 14 17H10a2 2 0 0 0-1.5.8C6.4 16.5 5 14.1 5 11.5A7 7 0 0 1 12 2z" />
  </svg>,
  /* 5 — Chat bubble + check (Ongoing Support) */
  <svg key={5} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M9 11l2 2 4-4" />
  </svg>,
];

export default function Benefits() {
  const { lang } = useLang();
  const t = translations[lang].benefits;

  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-[#F8F5F0] overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(37,99,235,0.05) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <span className="section-badge">{t.badge}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-[#0b0f1a]">{t.title1} </span>
              <span className="gradient-text">{t.title2}</span>
            </h2>
            <p className="text-[#6b7280] max-w-xl text-lg leading-relaxed">{t.subtitle}</p>
          </div>
        </AnimateOnScroll>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div className="group bg-[#F0EBE3] border border-[rgba(11,15,26,0.07)] rounded-2xl p-6 flex gap-4 items-start h-full transition-all duration-300 hover:border-[rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.07)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.15)] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {ICONS[i]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b0f1a] mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <AnimateOnScroll delay={500}>
          <div className="mt-16 bg-[#F0EBE3] border border-[rgba(11,15,26,0.07)] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 animate-border-glow">
            <div>
              <div className="text-2xl font-black text-[#0b0f1a] mb-1">
                {translations[lang].cta.title1}
              </div>
              <div className="text-[#6b7280] text-sm">{translations[lang].cta.subtitle}</div>
            </div>
            <a
              href="mailto:visiondelturco@gmail.com"
              className="btn-gold flex-shrink-0 px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap shadow-xl"
            >
              {translations[lang].cta.btn1}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
