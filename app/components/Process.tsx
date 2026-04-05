'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

export default function Process() {
  const { lang } = useLang();
  const t = translations[lang].process;

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#EDE8DF]" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-20">
          <div className="flex flex-col items-center gap-4">
            <span className="section-badge">{t.badge}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="gradient-text">{t.title1}</span>
              <br />
              <span className="text-[#0b0f1a]">{t.title2}</span>
            </h2>
            <p className="text-[#6b7280] max-w-xl text-lg leading-relaxed">{t.subtitle}</p>
          </div>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.2)] to-transparent hidden lg:block" />

          <div className="flex flex-col gap-0">
            {t.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <AnimateOnScroll key={i} delay={i * 120} direction={isEven ? 'left' : 'right'}>
                  <div className={`relative flex items-center gap-8 py-8 lg:py-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:flex-row`}>

                    {/* Content card */}
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                      <div
                        className={`inline-block bg-[#F0EBE3] border border-[rgba(11,15,26,0.08)] rounded-2xl p-6 lg:p-8 max-w-md w-full transition-all duration-300 hover:border-[rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.07)] ${
                          isEven ? 'lg:ml-auto' : ''
                        }`}
                      >
                        <h3 className="text-xl font-bold text-[#0b0f1a] mb-3">{step.title}</h3>
                        <p className="text-[#6b7280] leading-relaxed text-sm">{step.desc}</p>
                      </div>
                    </div>

                    {/* Center number node */}
                    <div className="relative z-10 flex-shrink-0 flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.3)] font-black text-white text-lg">
                        {step.num}
                      </div>
                      {i < t.steps.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-[rgba(37,99,235,0.4)] to-[rgba(37,99,235,0.05)] lg:hidden" />
                      )}
                    </div>

                    {/* Empty spacer */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
