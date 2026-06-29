## Inspiration Brief — Valentino Repuestos Landing Page

**Surface:** landing (local auto-parts shop in Alto Valle, Argentina)
**Goal:** Convert local search traffic into WhatsApp inquiries, phone calls, and in-store visits. Secondary: establish professional digital presence vs competitors who have basic sites but no real e-commerce.
**Audience:** 
- Talleristas/mecánicos (B2B): buscan repuestos específicos, stock garantizado, precios mayoristas, cuenta corriente
- Particulares (B2C): dueños de auto que necesitan batería, frenos, aceite, filtros; valoran retiro inmediato y envío mismo día
- Ambos buscan en móvil mientras están en el taller o en casa; deciden rápido

**Existing system to reuse:** 
- Next.js 14 + Tailwind + shadcn/ui patterns (but we'll use minimal custom components)
- Color: Valentino Red (#C41E3A) as single accent
- Typography: Inter (UI) + Poppins (display headings)
- WhatsApp integration as primary CTA

---

### References checked

**1. Craftwork — curated websites (local business / services)**
- Example: Local service sites with clean hero → services → proof → CTA rhythm
- Pattern extracted: Generous section spacing, clear visual hierarchy, card grids with subtle borders, single accent color throughout
- Why it fits: Professional without being corporate; works for local trust-building

**2. Landing Love — conversion-focused landing pages**
- Example: Service business landings with "badge → H1 → subtitle → primary CTA → trust signal" above fold
- Pattern extracted: Hero badge ("Local · Stock real · Envío mismo día"), single primary CTA (WhatsApp), secondary CTA (Ver catálogo), proof strip (logos/clientes) below fold
- Why it fits: Mobile-first, clear action hierarchy, trust signals for local businesses

**3. SaaSpo — SaaS/B2B feature presentation**
- Example: Feature cards with icon + title + description + subtle hover
- Pattern extracted: 3-4 column grid, icon in colored circle, concise copy, consistent card height
- Why it fits: Presenting categories (baterías, frenos, embragues, lubricantes) as "features" of the shop

**4. CTA Gallery — call-to-action sections**
- Example: Sticky WhatsApp button + footer CTA with phone/email
- Pattern extracted: Floating WhatsApp button bottom-right (always accessible), footer with NAP (Name, Address, Phone) + WhatsApp link
- Why it fits: Primary conversion action is WhatsApp; must be frictionless on mobile

**5. Component Gallery — design systems (shadcn/ui patterns)**
- Example: Card, Button, Badge, Separator components
- Pattern extracted: Border-based cards (not shadows), consistent radius (rounded-xl), focus-visible states, accessible color contrast
- Why it fits: Our stack uses shadcn/ui; we'll mirror its restraint

---

### Decisions

**Layout:**
- Single-page scrolling with clear sections: Hero → Categorías → Cómo funciona → Productos destacados → Testimonios → Local/Contacto → Footer
- Max-width container: 1200px (1280px with padding)
- Section spacing: py-16 sm:py-24 (generous but not excessive)
- Hero: min-h-[70vh] with centered content, background image with dark overlay

**Typography:**
- Display (H1/H2): Poppins 700, clamp(2.5rem, 5vw, 4rem) / clamp(2rem, 4vw, 3rem)
- Body: Inter 400/500, 1rem base, 1.6 line-height
- UI labels: Inter 500/600, 0.875rem
- No gradient text, no decorative type treatments

**Color:**
- Background: White (#FFFFFF) primary, Gray-50 (#F9FAFB) alternate sections
- Text: Gray-900 (#111827) primary, Gray-600 (#4B5563) secondary
- Accent: Valentino Red (#C41E3A) — ONLY for: primary buttons, active states, icon circles, key highlights, WhatsApp button (green stays for WhatsApp)
- Gold (#D4A843) — ONLY for: "destacado" badges, minor accents (used sparingly)
- Borders: Gray-200 (#E5E7EB)
- NO gradients, NO glassmorphism, NO colored shadows, NO purple/dark-only themes

**Components:**
- Button Primary: Red bg, white text, rounded-lg, px-6 py-3, hover: red-dark, focus-visible ring
- Button Secondary: Dark bg (#1A1A2E), white text, same sizing
- Button WhatsApp: Green-600 bg, white text, fixed bottom-right on mobile, inline in hero/footer
- Card: White bg, 1px Gray-200 border, rounded-xl, p-6, hover: border-red/30 + shadow-sm (subtle)
- Badge: Red-50 bg / Red-700 text (stock), Gold-50 bg / Gold-700 text (destacado)
- Icon Circle: Red-50 bg / Red-600 icon, w-12 h-12 rounded-lg

**CTA/Messaging:**
- Hero: "Repuestos para tu vehículo en el Alto Valle" + "Stock real · Retiro en 1 hora · Envío mismo día a Cipolletti y Neuquén"
- Primary CTA: "Consultar por WhatsApp" (opens chat with pre-filled message)
- Secondary CTA: "Ver catálogo completo"
- Trust signals: "200+ productos en stock", "Entrega mismo día", "Garantía directa", "Precios mayoristas"

**Motion:**
- NO scroll animations, NO parallax, NO staggered reveals
- ONLY: CSS transitions (150-200ms) on hover/focus for buttons, cards, links
- Respects `prefers-reduced-motion`

---

### Ponytail Constraints

**What will NOT be built:**
- Carousel/slider (single static hero is clearer)
- Complex product filtering (v1 = static featured products + "ver catálogo" link)
- User accounts, wishlist, compare (overkill for local shop)
- Blog, newsletter, multi-language
- Animation library (Framer Motion removed — CSS only)
- External icon library (inline SVGs only)
- Dark mode (not needed for local business landing)

**Dependencies avoided:**
- lucide-react (using inline SVGs)
- framer-motion
- any chart/animation lib
- CMS (static data in TS file for v1)

**Existing components reused:**
- Tailwind utility classes only
- Next.js Image for optimization
- Native fetch for WhatsApp deep links

---

### Accessibility

- Contrast: All text ≥ 4.5:1 (Red on white = 4.5:1 ✓, White on Red = 4.5:1 ✓, Green on white = 4.5:1 ✓)
- Keyboard/focus: Visible focus rings on all interactive elements (ring-2 ring-red-500/50 offset-2)
- Reduced motion: All transitions wrapped in `@media (prefers-reduced-motion: no-preference)`
- Semantic structure: `<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy (h1 → h2 → h3)
- Alt text: All images have descriptive alt attributes
- WhatsApp links: `aria-label="Consultar por WhatsApp"`

---

### Verification

- Screenshot/browser check: Full page at 375px, 768px, 1440px
- Responsive breakpoints: 640px, 768px, 1024px, 1280px
- DOM/a11y checks: axe-core or WAVE on deployed URL
- Final acceptance criteria:
  1. Loads in < 3s on 4G (Lighthouse Performance ≥ 90)
  2. Hero CTA clickable without scroll on mobile
  3. WhatsApp button accessible thumb-zone on mobile
  4. All interactive elements have focus states
  5. No console errors
  6. Correct OG/Twitter meta tags for sharing