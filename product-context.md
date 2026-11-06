# MOBILISE — Product Context for Website Rebuild

Derived from: `mobilise-website-content.md` (full scrape of mobilise.agency, 2026-11-03)
Purpose: single reference doc to brief design/dev/content work on a new build of this site.

---

## 1. Company Snapshot

| | |
|---|---|
| **Name** | MOBILISE |
| **Category** | B2B marketing agency (growth marketing, creative production, sales enablement) |
| **Model** | Independent, global agency — not a holding-company network |
| **HQ** | Bangalore, India |
| **Other studios** | Seattle (USA), Dubai (UAE), Singapore |
| **Regions served** | APAC, EMEA, Americas |
| **Client profile** | Enterprise brands — tech, industrial, SaaS, healthcare, manufacturing, fashion, eCommerce |
| **Named clients** | Adidas, AirAsia, Bira, Canon, Caterpillar, Elastic, Finastra, GE, Rockwell Automation, Red Hat (and testimonials also reference Salesforce, HP) |
| **Contact** | info@mobilise.agency |
| **Tagline** | "MOBILISE Makes Global Integrated Marketing Interesting" |

**One-line positioning:** An independent, full-funnel B2B marketing agency that gives enterprise brands global-standard creative, content, and campaign execution with regional fluency — at speed.

---

## 2. Brand Voice & Tone

- **Confident, not corporate-stiff.** Short declarative sentences ("We bring clarity where there's complexity.").
- **Clarity over jargon.** Repeated motif: clarity, precision, reliability.
- **Credibility via proof, not hype.** Leans on testimonials from recognizable enterprise logos rather than invented stats.
- **Editorial/thoughtful register in blog content** — longer-form, first-person opinion pieces (e.g. "The Death of Curiosity in Marketing"), not generic listicle SEO filler.
- **Internally, a warmer/human tone** on Careers/Inside pages — specific, slightly playful details (e.g. office dogs "Pablo & Penny", terrace breakfasts) used to make agency-life claims feel real rather than templated HR copy.

**Recurring phrases / brand language to preserve or riff on:**
- "Clarity where there's complexity, precision where it matters"
- "MOBILISE moves global brands / moves conversations"
- "Ready to MOBILISE?"
- "Let's make B2B interesting"
- "Comprehensive solutions. Strategies. Connected. Execution."

---

## 3. Core Value Proposition / Differentiators

1. **Independent agency, global delivery** — not tied to a network holding company; over a decade of client relationships built on word-of-mouth referral (implicit trust signal).
2. **Full-funnel capability** — strategy through creative production through delivery, under one roof (reduces number of vendors a client needs).
3. **Regional fluency at global scale** — same brand system, locally adapted messaging/creative across APAC, EMEA, Americas.
4. **Speed + QA discipline** — repeated claim of fast turnaround without sacrificing accuracy/guideline alignment ("fast, accurate, guidelines-aligned").
5. **Enterprise-grade proof** — testimonials specifically from Fortune-500-tier marketing leads (Salesforce, Red Hat, HP, Elastic, Rockwell) emphasizing responsiveness and creative quality.

---

## 4. Services (5 pillars — use as nav/IA backbone)

| # | Service | Core promise | Sub-offerings |
|---|---|---|---|
| 1 | **Full Service Marketing** | Data-driven programs that grow customers/revenue/profit | Demand gen & ABM; content/email/integrated campaigns; performance reporting & optimisation |
| 2 | **Creative Production** | Unparalleled design, delivered fast and at scale | Campaign concepts & multi-format assets; video/motion/presentation design; regional adaptation & brand governance |
| 3 | **Design & Development** | UI/UX and SEO-optimized sites that convert | UX strategy & IA; responsive dev & technical SEO; analytics-ready landing pages |
| 4 | **Sales Enablement** | Equip sales teams to lead with confidence | Sales decks/playbooks/conversation guides; partner enablement portals; buyer-stage messaging |
| 5 | **Marketing/Sales Strategy** | Discovery-led strategy that delivers results | GTM & market-entry planning; sales/marketing alignment workshops; measurement frameworks |

**Industry verticals served:** Technology, SaaS, eCommerce, Healthcare, Manufacturing, Fashion.

---

## 5. Site Structure (current IA — baseline for rebuild)

```
/                   Home
/services           Services (5-pillar overview)
/services/[slug]    Service sub-pages (at least one found: ecommerce-development-agency — implies each
                     service/industry may have its own dedicated landing page; worth expanding for SEO)
/about-us           About / company story
/inside             Culture & employee value proposition
/blog               Blog index (filterable by year)
/blog/[post]        Individual articles
/careers            Open roles (currently routes to Google Forms — opportunity to bring in-house)
/contact            Lead-gen contact form
/whitepaper         Gated/ungated resource hub (found: a general whitepaper landing + at least one
                     dedicated whitepaper, "brand-safe-marketing-ai" — indicates a resource/lead-magnet
                     content type worth formalizing)
/privacy-policy     Legal
/terms              Legal
```

**Rebuild recommendations:**
- Promote `/services/[slug]` and `/whitepaper/[slug]` to first-class, templated content types rather than one-offs — they're doing SEO/lead-gen work the current IA half-supports.
- Careers currently off-ramps to Google Forms per role; consider a native careers/ATS flow for brand consistency.
- No visible case-study/portfolio page despite strong client logos and testimonial proof — this is a gap worth filling (the eCommerce service page references "Case studies ADIDAS / STICKERLAND" with placeholder lorem ipsum, suggesting a case-study module was planned but never populated).

---

## 6. Homepage Content Blocks (in order — reusable as a template)

1. Hero: tagline + sub-line + two CTAs (soft "Learn more" / hard "Let's Talk")
2. About teaser (who we are, one paragraph)
3. Testimonial carousel (6 quotes, named role + client logo, rotating)
4. Industry specialization grid (6 cards: Technology, SaaS, eCommerce, Healthcare, Manufacturing, Fashion)
5. Latest blog posts (3-up teaser + "explore all")
6. Client logo strip ("Global Partnership")
7. Studio locations (map + 4 address cards)

---

## 7. Key Pages — Content Summary

- **Services** — 5-pillar breakdown (see §4), each with 3 bullet sub-offerings, closing CTA block.
- **About Us** — "Who we are" (HQ + global team), "What makes us different" (3 pillars: track record/word-of-mouth, global clarity, reliable delivery), "What we do" (3 capability clusters: technical fluency, content & creative, delivery & enablement).
- **Inside MOBILISE** (culture/EVP page) — 7 numbered culture pillars: performance-linked rewards, peer recognition, flexible WFH, peer feedback loops, professional growth/sponsorships, respected time-off, benefits + office dogs as mascots.
- **Careers** — 10 open department categories, all Bangalore-based, each linking to a separate Google Form.
- **Contact** — 3-step "what happens next" expectation-setter, minimal form (name, work email, message), honeypot spam field, privacy policy link, 1–2 business day response SLA.
- **Blog** — Editorial, first-person thought-leadership tone; current topics: AI in marketing/governance, attribution ("dark social"), future of work/flexibility, epistemic humility in data-driven marketing. Filterable by year. ~4 posts live, cadence appears irregular/low-volume — opportunity for content strategy rebuild.
- **Legal (Terms/Privacy)** — Standard informational-website terms; privacy policy discloses Google Apps Script + Google Sheets as the actual form backend (useful technical note: current lead capture is a lightweight Google Workspace integration, not a CRM).

---

## 8. SEO / Metadata Patterns Observed

- Every page has a unique `<title>` formatted as `[Page-specific phrase] | MOBILISE` and a distinct meta description — keep this pattern.
- OG/Twitter card tags fully populated on every page with a shared fallback image (`Thumbnail.jpg`), suggesting no per-page custom OG images except blog posts (which use their own hero image).
- `theme-color` varies by page (`#0A919B` teal default, `#12474C` darker on Contact) — minor brand accent usage worth carrying into design tokens.
- Robots meta consistently `index, follow` with large image/snippet previews allowed — no pages are deliberately de-indexed except presumably the form/elements utility pages excluded from this scrape.

---

## 9. Technical/Functional Notes for Rebuild

- **Forms:** Contact and Careers forms are currently thin wrappers — Contact submits via a custom Google Apps Script → Google Sheets + email notification; Careers routes entirely out to Google Forms per role. A rebuild should decide whether to keep this lightweight approach or move to a proper CRM/ATS integration.
- **Blog filtering:** Year-based filter UI exists (`?view=all`, per-year query params) — simple faceted filter, not a full taxonomy (no visible tag/category system beyond a "testimonials" category archive found in site map but not in main nav).
- **Legacy cruft to deliberately drop in rebuild:** form-builder utility pages (`/metform-form/*`), page-builder scaffolding (`/elements/*`, `/elementskit-content/*`), and paginated author/category archives — these are WordPress/page-builder artifacts, not intentional content, and shouldn't be carried into a rebuild's IA.
- **Placeholder content found in production:** the eCommerce service page currently ships with lorem-ipsum case study placeholders — a real signal that a case-studies content type was planned but never finished; prioritize it in the rebuild.

---

## 10. Content Gaps / Opportunities (for the new build)

1. **No case studies / portfolio proof page** despite strong client roster and testimonials — highest-leverage addition.
2. **No team/leadership bios page** in main nav (a "Bill" bio and "Nupur Dayal" bio appear only inside page-builder/metform scaffolding metadata, not a real public team page) — consider a proper People/Leadership page to add trust and personality.
3. **Thin, irregular blog cadence** (4 posts spanning 2024–2026) — opportunity to define content pillars (AI & marketing ethics, attribution/measurement, B2B creative systems, agency culture/future of work) and commit to a cadence.
4. **Whitepaper/gated-content system exists but is underbuilt** (`/whitepaper` and `/whitepaper/brand-safe-marketing-ai` found) — worth formalizing as a lead-gen content type with its own template, gating, and CRM hook.
5. **Careers experience is fragmented** (10 separate Google Forms) — a unified careers page with one application flow would read as more professional for an agency selling "creative production" and "design & development" services to enterprise clients.

---

## 11. Suggested Sitemap for Rebuild

```
/                         Home
/about                    About (company story, differentiators, locations)
/services                 Services overview
/services/[service]       5 pillar pages (full-service-marketing, creative-production,
                           design-development, sales-enablement, strategy)
/industries/[industry]    6 vertical pages (technology, saas, ecommerce, healthcare,
                           manufacturing, fashion) — currently only cards, no dedicated pages
/work                     NEW — case studies / portfolio (fill the proof gap)
/insights (blog)          Editorial content hub
/insights/[slug]          Article template
/resources (whitepapers)  NEW — formalized gated content hub
/resources/[slug]         Resource template
/careers                  Unified careers page + single application flow
/culture (Inside)         EVP / culture page
/contact                  Contact
/privacy-policy, /terms   Legal
```

---

*This document is a synthesis for internal build planning. Original marketing copy on the live site remains MOBILISE's own; reuse their exact phrasing only where intentionally carrying brand voice forward, and rewrite the rest for the new build.*
