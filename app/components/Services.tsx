'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { useLang } from '@/app/context/LangContext';
import { translations } from '@/app/lib/translations';

/* ─── Animated visuals (pure CSS / SVG — no library) ─── */

/** Card 1 – Chat bubbles appear one-by-one in a loop */
function ChatAnimation() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col justify-center gap-2 p-3">
      {/* Bot bubble 1 */}
      <div
        className="flex gap-2 items-end"
        style={{ animation: 'chat-msg1 5s ease-in-out infinite', opacity: 0 }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex-shrink-0 flex items-center justify-center text-[7px] text-white font-black select-none">
          AI
        </div>
        <div className="bg-white border border-[rgba(11,15,26,0.09)] rounded-xl rounded-bl-none px-2.5 py-1.5 shadow-sm flex gap-1.5 items-center">
          <div className="w-16 h-1.5 bg-[rgba(11,15,26,0.1)] rounded-full" />
          <div className="w-10 h-1.5 bg-[rgba(11,15,26,0.07)] rounded-full" />
        </div>
      </div>

      {/* User bubble */}
      <div
        className="flex justify-end"
        style={{ animation: 'chat-msg2 5s ease-in-out infinite', opacity: 0 }}
      >
        <div className="bg-[rgba(30,58,138,0.08)] border border-[rgba(30,58,138,0.15)] rounded-xl rounded-br-none px-2.5 py-1.5 flex gap-1.5 items-center">
          <div className="w-12 h-1.5 bg-[rgba(30,58,138,0.25)] rounded-full" />
          <div className="w-8 h-1.5 bg-[rgba(30,58,138,0.18)] rounded-full" />
        </div>
      </div>

      {/* Bot typing dots */}
      <div
        className="flex gap-2 items-end"
        style={{ animation: 'chat-msg3 5s ease-in-out infinite', opacity: 0 }}
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] flex-shrink-0 flex items-center justify-center text-[7px] text-white font-black select-none">
          AI
        </div>
        <div className="bg-white border border-[rgba(11,15,26,0.09)] rounded-xl rounded-bl-none px-3 py-2.5 flex gap-1.5 items-center shadow-sm">
          {[0, 0.2, 0.4].map((d, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: `hsl(${220 + i * 10}, 80%, ${55 + i * 8}%)`,
                animation: `typing-bounce 1.2s ${d}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Card 2 – Flowing data nodes with SVG animated dots */
function FlowAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2">
      <svg viewBox="0 0 220 88" className="w-full h-full overflow-visible" fill="none">
        {/* Dot-grid background */}
        <defs>
          <pattern id="fg" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(37,99,235,0.09)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="220" height="88" fill="url(#fg)" rx="8" />

        {/* Connector lines */}
        <line x1="54" y1="44" x2="86"  y2="44" stroke="rgba(37,99,235,0.28)" strokeWidth="1.5" />
        <line x1="134" y1="44" x2="166" y2="44" stroke="rgba(37,99,235,0.28)" strokeWidth="1.5" />
        {/* Branch down from centre */}
        <line x1="110" y1="58" x2="110" y2="72" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5" />
        <circle cx="110" cy="77" r="7" fill="rgba(37,99,235,0.07)" stroke="rgba(37,99,235,0.3)" strokeWidth="1.2" />
        <text x="110" y="80" textAnchor="middle" fontSize="6" fill="#2563eb" fontWeight="700">DB</text>

        {/* Nodes */}
        <circle cx="40"  cy="44" r="14" fill="white" stroke="rgba(30,58,138,0.28)" strokeWidth="1.5" />
        <text   x="40"  y="40"  textAnchor="middle" fontSize="6.5" fill="#1e3a8a" fontWeight="700">IN</text>
        <text   x="40"  y="50"  textAnchor="middle" fontSize="5.5" fill="#9ca3af">put</text>

        <circle cx="110" cy="44" r="14" fill="rgba(30,58,138,0.07)" stroke="rgba(30,58,138,0.38)" strokeWidth="1.5" />
        <text   x="110" y="40"  textAnchor="middle" fontSize="6"   fill="#1e3a8a" fontWeight="700">PRO</text>
        <text   x="110" y="50"  textAnchor="middle" fontSize="5.5" fill="#9ca3af">cess</text>

        <circle cx="180" cy="44" r="14" fill="white" stroke="rgba(30,58,138,0.28)" strokeWidth="1.5" />
        <text   x="180" y="40"  textAnchor="middle" fontSize="6.5" fill="#1e3a8a" fontWeight="700">OUT</text>
        <text   x="180" y="50"  textAnchor="middle" fontSize="5.5" fill="#9ca3af">put</text>

        {/* Travelling dot: IN → PROCESS */}
        <circle r="3.5" fill="#2563eb">
          <animate attributeName="cx" from="54"  to="96"  dur="1.8s" repeatCount="indefinite" begin="0s" />
          <animate attributeName="cy" values="44;44" dur="1.8s" repeatCount="indefinite" begin="0s" />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0s" />
        </circle>

        {/* Travelling dot: PROCESS → OUT */}
        <circle r="3.5" fill="#1d4ed8">
          <animate attributeName="cx" from="124" to="166" dur="1.8s" repeatCount="indefinite" begin="0.9s" />
          <animate attributeName="cy" values="44;44" dur="1.8s" repeatCount="indefinite" begin="0.9s" />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" begin="0.9s" />
        </circle>

        {/* Ghost dot returning (lighter feedback loop) */}
        <circle r="2.5" fill="#93c5fd">
          <animate attributeName="cx" from="166" to="54"  dur="2.6s" repeatCount="indefinite" begin="1.4s" />
          <animate attributeName="cy" values="47;47" dur="2.6s" repeatCount="indefinite" begin="1.4s" />
          <animate attributeName="opacity" values="0;0.55;0.55;0" dur="2.6s" repeatCount="indefinite" begin="1.4s" />
        </circle>
      </svg>
    </div>
  );
}

/** Card 3 – Browser window with loading progress + cursor */
function BrowserAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2.5">
      <div className="w-full h-full bg-white border border-[rgba(11,15,26,0.1)] rounded-lg overflow-hidden shadow-sm flex flex-col">
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#F8F5F0] border-b border-[rgba(11,15,26,0.08)] flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
          <div className="flex-1 mx-1.5 bg-white border border-[rgba(11,15,26,0.09)] rounded px-2 py-0.5 text-[7.5px] text-[#9ca3af] truncate leading-none pt-1">
            visiondelturco.com
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 relative p-2.5 overflow-hidden">
          {/* Progress bar */}
          <div
            className="h-0.5 bg-[rgba(37,99,235,0.1)] rounded-full mb-2.5 overflow-hidden"
            style={{ animation: 'progress-appear 3.5s ease-in-out infinite' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #1e3a8a, #2563eb)',
                animation: 'progress-fill 2.4s ease-in-out infinite',
              }}
            />
          </div>

          {/* Hero skeleton */}
          <div className="flex gap-2 mb-2">
            <div className="w-12 h-10 rounded bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.1)] flex-shrink-0" />
            <div className="flex-1 flex flex-col gap-1.5 justify-center">
              <div className="h-1.5 bg-[rgba(11,15,26,0.09)] rounded-full w-full" />
              <div className="h-1.5 bg-[rgba(11,15,26,0.06)] rounded-full w-4/5" />
              <div className="h-1.5 bg-[rgba(11,15,26,0.05)] rounded-full w-11/12" />
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="h-1.5 bg-[rgba(11,15,26,0.07)] rounded-full flex-1" />
            <div className="h-1.5 bg-[rgba(11,15,26,0.05)] rounded-full flex-1" />
            <div className="h-1.5 bg-[rgba(11,15,26,0.06)] rounded-full w-1/3" />
          </div>

          {/* Cursor */}
          <div
            className="absolute top-0 left-0 text-[13px] select-none pointer-events-none text-[#1e3a8a]"
            style={{ animation: 'cursor-move 4.5s ease-in-out infinite' }}
          >
            ↖
          </div>
        </div>
      </div>
    </div>
  );
}

/** Card 4 – Content / sparkle burst */
function ContentAnimation() {
  const items: Array<{ emoji: string; top: string; left?: string; right?: string; anim: string; delay: string }> = [
    { emoji: '🎬', top: '14%', left: '12%',  anim: 'sparkle-1', delay: '0s'    },
    { emoji: '✨', top: '16%', right: '14%', anim: 'sparkle-2', delay: '0.5s'  },
    { emoji: '🎨', top: '55%', left: '6%',   anim: 'sparkle-3', delay: '1s'    },
    { emoji: '📱', top: '58%', right: '8%',  anim: 'sparkle-1', delay: '1.5s'  },
    { emoji: '⭐', top: '38%', left: '3%',   anim: 'sparkle-2', delay: '0.8s'  },
    { emoji: '💫', top: '36%', right: '3%',  anim: 'sparkle-3', delay: '1.3s'  },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
      {/* Animated gradient wash */}
      <div
        className="absolute inset-0 opacity-25 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, #dbeafe, #c7d2fe, #ede9fe, #e0f2fe, #dbeafe)',
          backgroundSize: '400% 400%',
          animation: 'color-shift 7s ease-in-out infinite',
        }}
      />

      {/* Central star */}
      <div
        className="relative z-10 text-4xl select-none"
        style={{ animation: 'content-pulse 3s ease-in-out infinite' }}
      >
        ✦
      </div>

      {/* Orbiting icons */}
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute select-none"
          style={{
            fontSize: i < 2 ? '1.1rem' : '0.9rem',
            top: item.top,
            left: item.left,
            right: item.right,
            opacity: 0,
            animation: `${item.anim} 3.2s ${item.delay} ease-in-out infinite`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}

/* ─── Main component ─── */

const CARD_VISUALS = [ChatAnimation, FlowAnimation, BrowserAnimation, ContentAnimation];

export default function Services() {
  const { lang } = useLang();
  const t = translations[lang].services;

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#F8F5F0] overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(37,99,235,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <span className="section-badge">{t.badge}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0b0f1a]">
              {t.title1} <span className="gradient-text">{t.title2}</span>
            </h2>
            <p className="text-[#6b7280] max-w-2xl text-lg leading-relaxed">{t.subtitle}</p>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, i) => {
            const Visual = CARD_VISUALS[i];
            return (
              <AnimateOnScroll key={i} delay={i * 90}>
                <div className="group relative flex flex-col rounded-2xl bg-white border border-[#E5E0D8] shadow-sm overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[rgba(37,99,235,0.32)] hover:shadow-[0_16px_48px_rgba(37,99,235,0.11)]">

                  {/* Animated visual area */}
                  <div className="h-[130px] bg-[#F8F5F0] border-b border-[#E5E0D8] overflow-hidden flex-shrink-0">
                    <Visual />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col gap-4 p-5 flex-1">
                    <div>
                      <h3 className="text-base font-bold text-[#0b0f1a] mb-1.5 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {service.badges.map((badge, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[rgba(30,58,138,0.07)] border border-[rgba(30,58,138,0.14)] text-[#1e3a8a]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
