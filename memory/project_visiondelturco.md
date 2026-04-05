---
name: VisionDelTurco project
description: AI agency website built with Next.js 16, TypeScript, Tailwind v4 — design reference, color palette, structure
type: project
---

Full landing page site for VisionDelTurco AI Agency.

**Stack:** Next.js 16.2.2, React 19, TypeScript, Tailwind CSS v4 (configured via @theme in globals.css, no tailwind.config.js)

**Design:** Dark background (#07070f), orange/gold accent (#f59e0b), floating hero cards (operiqo style), grid/dot background (coremagnetb2b style)

**Structure:**
- `app/lib/translations.ts` — TR/EN/RU translations (as const)
- `app/context/LangContext.tsx` — language state context (client)
- `app/components/AnimateOnScroll.tsx` — scroll-triggered fade/slide wrapper
- Sections: Navbar, Hero, Services, Process, Benefits, Testimonials, FAQ, CTA, Footer

**Why:** User requested an AI agency site inspired by operiqo.com (floating cards, numbered sections) and coremagnetb2b.com (dark professional background), with 3-language support.

**How to apply:** When adding new sections or components, follow the card-glass + card-glass-hover pattern and use the gradient-text / section-badge utilities defined in globals.css.
