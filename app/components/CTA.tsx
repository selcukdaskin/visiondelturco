'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

export default function CTA() {
  const { lang } = useLang();
  const t = translations[lang].cta;

  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#EDE8DF]" />

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)' }}
      />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[rgba(37,99,235,0.07)] animate-spin-slow pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(37,99,235,0.1)] pointer-events-none"
        style={{ animation: 'spin-slow 14s linear infinite reverse' }}
      />

      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <div className="flex flex-col items-center gap-8">
            <span className="section-badge animate-glow-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mr-2 animate-pulse" />
              {t.badge}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className="gradient-text-shimmer">{t.title1}</span>
              {t.title2 && (
                <>
                  <br />
                  <span className="text-[#0b0f1a]">{t.title2}</span>
                </>
              )}
            </h2>

            <p className="text-[#6b7280] text-lg max-w-xl leading-relaxed">{t.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="mailto:visiondelturco@gmail.com"
                className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base shadow-[0_0_40px_rgba(37,99,235,0.2)]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 4h14v10H2V4zm0 0l7 6 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.btn1}
              </a>
              <a
                href="#services"
                className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-transparent"
              >
                {t.btn2}
              </a>
            </div>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
