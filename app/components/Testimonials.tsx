'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
          <path d="M7 1l1.5 4H13l-3.5 2.5 1.3 4L7 9l-3.8 2.5 1.3-4L1 5h4.5L7 1z" />
        </svg>
      ))}
    </div>
  );
}

const AVATAR_COLORS = ['from-violet-500 to-purple-600', 'from-rose-500 to-pink-600', 'from-cyan-500 to-blue-600'];

export default function Testimonials() {
  const { lang } = useLang();
  const t = translations[lang].testimonials;

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a14]" />
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(245,158,11,0.06) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <span className="section-badge">{t.badge}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-white">{t.title1} </span>
              <span className="gradient-text">{t.title2}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className="group card-glass card-glass-hover rounded-2xl p-7 flex flex-col gap-5 h-full relative overflow-hidden">
                {/* Gold left accent bar */}
                <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-[#f59e0b] to-transparent rounded-full" />

                {/* Quote mark */}
                <div className="text-6xl text-[rgba(245,158,11,0.1)] font-black leading-none select-none -mb-2">
                  &ldquo;
                </div>

                {/* Stars */}
                <StarRating count={item.rating} />

                {/* Quote text */}
                <p className="text-slate-300 leading-relaxed text-sm flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${AVATAR_COLORS[i]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{item.name}</div>
                    <div className="text-slate-500 text-xs">
                      {item.role} — {item.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Trust badges */}
        <AnimateOnScroll delay={400}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {['150+ Projects', '98% Satisfaction', '50+ Clients', '3 Countries'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] opacity-60" />
                {badge}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
