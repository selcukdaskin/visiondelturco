'use client';

import { useEffect, useRef } from 'react';
import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang].hero;
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => { el.style.opacity = '1'; }, 50);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F5F0]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Radial glow – bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] glow-orb pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
      />
      {/* Radial glow – top right */}
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] glow-orb pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
      />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[rgba(37,99,235,0.05)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(37,99,235,0.07)] pointer-events-none" />

      <div
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 lg:py-0"
        style={{ opacity: 0, transition: 'opacity 0.8s ease' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:min-h-0 lg:py-24">

          {/* ── Left: Content ── */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Badge */}
            <div className="inline-flex self-start" style={{ animation: 'fade-in 0.6s ease 0.1s both' }}>
              <span className="section-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mr-2 animate-pulse" />
                {t.badge}
              </span>
            </div>

            {/* Heading */}
            <div style={{ animation: 'fade-in 0.7s ease 0.2s both' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-[#0b0f1a]">{t.title1} </span>
                <span className="gradient-text-shimmer">{t.title2}</span>
                <br />
                <span className="text-[#0b0f1a]">{t.title3}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-lg text-[#6b7280] leading-relaxed max-w-xl"
              style={{ animation: 'fade-in 0.7s ease 0.35s both' }}
            >
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4" style={{ animation: 'fade-in 0.7s ease 0.45s both' }}>
              <a
                href="mailto:visiondelturco@gmail.com"
                className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-xl"
              >
                {t.cta1}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#services"
                className="btn-outline-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-transparent"
              >
                {t.cta2}
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-6 pt-4 border-t border-[rgba(11,15,26,0.1)]"
              style={{ animation: 'fade-in 0.7s ease 0.55s both' }}
            >
              {([t.stat1, t.stat2, t.stat3] as Array<{value: string; label: string}>).map((stat, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-3xl font-black gradient-text">{stat.value}</span>
                  <span className="text-xs text-[#9ca3af] uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Floating Visual ── */}
          <div
            className="relative hidden lg:flex items-center justify-center h-[600px]"
            style={{ animation: 'fade-in 0.9s ease 0.3s both' }}
          >
            {/* Glow behind cards */}
            <div
              className="absolute inset-0 m-auto w-64 h-64 glow-orb animate-glow-pulse"
              style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
            />

            {/* Spinning ring decoration */}
            <div
              className="absolute w-96 h-96 rounded-full border border-dashed border-[rgba(37,99,235,0.1)] animate-spin-slow"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
            />

            {/* Main Chat Card */}
            <div
              className="relative z-10 w-72 bg-white border border-[#E5E0D8] rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] animate-float"
              style={{ transform: 'rotate(-2deg)' }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[rgba(11,15,26,0.06)]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex items-center justify-center text-white text-xs font-black shadow-[0_0_12px_rgba(37,99,235,0.3)]">
                  AI
                </div>
                <div className="flex-1">
                  <div className="text-[#0b0f1a] text-sm font-semibold">{t.floatLabel}</div>
                  <div className="flex items-center gap-1 text-xs text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-3 text-xs">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex-shrink-0 flex items-center justify-center text-[9px] text-[#2563eb] font-bold">AI</div>
                  <div className="bg-white border border-[rgba(11,15,26,0.07)] rounded-xl rounded-tl-none p-2.5 text-[#374151] max-w-[180px] leading-relaxed shadow-sm">
                    {t.floatChat1}
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[rgba(37,99,235,0.09)] border border-[rgba(37,99,235,0.18)] rounded-xl rounded-tr-none p-2.5 text-[#1e3a8a] max-w-[180px] leading-relaxed">
                    {t.floatChat2}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex-shrink-0 flex items-center justify-center text-[9px] text-[#2563eb] font-bold">AI</div>
                  <div className="bg-white border border-[rgba(11,15,26,0.07)] rounded-xl rounded-tl-none p-2.5 text-[#374151] max-w-[180px] leading-relaxed shadow-sm">
                    {t.floatChat3}
                  </div>
                </div>
                {/* Typing indicator */}
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] flex-shrink-0 flex items-center justify-center text-[9px] text-[#2563eb] font-bold">AI</div>
                  <div className="bg-white border border-[rgba(11,15,26,0.07)] rounded-xl rounded-tl-none p-3 flex gap-1 items-center shadow-sm">
                    {[0.15, 0.3, 0.45].map((delay, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#9ca3af]"
                        style={{ animation: `float-slow 1.2s ease-in-out ${delay}s infinite` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="mt-4 flex items-center gap-2 bg-white border border-[rgba(11,15,26,0.08)] rounded-xl p-2.5 shadow-sm">
                <span className="text-xs text-[#9ca3af] flex-1">{t.floatPlaceholder}</span>
                <div className="w-7 h-7 rounded-lg btn-gold flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating metric card – top right */}
            <div
              className="absolute top-12 right-4 z-20 bg-white border border-[#E5E0D8] rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] animate-float-reverse"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-[10px] text-[#9ca3af] uppercase tracking-wide mb-1">{t.floatMetricLabel}</div>
              <div className="text-2xl font-black text-[#0b0f1a]">{t.floatMetricValue}</div>
              <div className="text-[11px] text-emerald-600 mt-0.5 font-medium">{t.floatMetricTrend}</div>
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 rounded-sm bg-[#2563eb]"
                    style={{ height: `${8 + (i % 3) * 4 + (i % 2) * 5}px`, opacity: 0.3 + i * 0.09 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating automation card – bottom left */}
            <div
              className="absolute bottom-20 -left-4 z-20 bg-white border border-[#E5E0D8] rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] animate-float-slow"
              style={{ animationDelay: '2s' }}
            >
              <div className="text-[10px] text-[#9ca3af] uppercase tracking-wide mb-1">{t.floatAutoLabel}</div>
              <div className="text-2xl font-black gradient-text">{t.floatAutoValue}</div>
              <div className="mt-2 flex gap-0.5 items-end">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 rounded-sm ${i < 9 ? 'bg-[#2563eb]' : 'bg-[rgba(11,15,26,0.1)]'}`}
                    style={{ height: '8px', opacity: i < 9 ? 0.5 + i * 0.05 : 1 }}
                  />
                ))}
              </div>
            </div>

            {/* Small floating pill badges */}
            <div className="absolute top-28 -left-8 z-20 animate-float-reverse" style={{ animationDelay: '0.5s' }}>
              <span className="section-badge text-[10px] shadow-sm bg-white">🤖 AI Powered</span>
            </div>
            <div className="absolute bottom-36 right-0 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
              <span className="section-badge text-[10px] shadow-sm bg-white">⚡ Automation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
