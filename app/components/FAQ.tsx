'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#F0EBE3] rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border ${
        open
          ? 'border-[rgba(37,99,235,0.3)] shadow-[0_4px_20px_rgba(37,99,235,0.08)]'
          : 'border-[rgba(11,15,26,0.07)] hover:border-[rgba(37,99,235,0.2)]'
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 p-5 sm:p-6">
        <span className="text-xs font-bold text-[rgba(37,99,235,0.45)] w-5 flex-shrink-0 font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className={`flex-1 text-sm sm:text-base font-semibold transition-colors duration-200 ${open ? 'text-[#2563eb]' : 'text-[#0b0f1a]'}`}>
          {q}
        </span>
        <div
          className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open
              ? 'border-[#2563eb] bg-[rgba(37,99,235,0.1)] rotate-45'
              : 'border-[rgba(11,15,26,0.15)] bg-[rgba(11,15,26,0.03)]'
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke={open ? '#2563eb' : '#6b7280'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="px-5 sm:px-6 pb-5 text-[#6b7280] text-sm leading-relaxed border-t border-[rgba(11,15,26,0.06)] pt-4 ml-9">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { lang } = useLang();
  const t = translations[lang].faq;

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#EDE8DF]" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, rgba(37,99,235,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll className="text-center mb-14">
          <div className="flex flex-col items-center gap-4">
            <span className="section-badge">{t.badge}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-[#0b0f1a]">{t.title1} </span>
              <span className="gradient-text">{t.title2}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-3">
          {t.items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 70}>
              <FAQItem q={item.q} a={item.a} index={i} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
