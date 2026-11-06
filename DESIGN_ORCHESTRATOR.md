# Design Orchestrator

Single source of truth for how design work is approached in this project. `CLAUDE.md` points here for substantial design work; the specialist skills below remain the source of truth for their own implementation details — this file only defines when/why/how they're used together.

---

## Product design direction

This project is MOBILISE's marketing site — an independent, global B2B growth-marketing and sales-enablement agency serving enterprise brands (Adidas, AirAsia, Canon, Caterpillar, Elastic, GE, Red Hat, Rockwell Automation). See `product-context.md` for the full product reasoning — this section is the design-relevant summary.

The design language should generally feel: **confident, precise, editorial, global-enterprise-grade, bold, clear — not corporate-stiff.**

Brand palette: teal `#0A919B` (primary accent) / `#12474C` (dark teal), black `#171717`, white, muted grays. See `brand-colors.md`.

Priority order when decisions conflict:
1. Content
2. Clarity
3. Credibility (proof via real client logos/testimonials, not hype)
4. Usability
5. Brand feeling
6. Motion

Motion supports the experience; it never becomes the experience. Confident, purposeful, editorial — avoid unnecessary animation, bouncing, flashy effects, or anything that distracts from content or undercuts enterprise credibility.

## Reference principle

When a reference (screenshot, URL, existing product) is provided:

**Do:** analyze its design language, understand its hierarchy, identify useful visual/interaction principles, adapt those principles to our product.

**Do not:** recreate it pixel-for-pixel, blindly copy its layout, copy its branding, or introduce elements simply because they exist in the reference.

Result should feel inspired by the reference while remaining original and appropriate for a global B2B agency positioning itself as clear, credible, and fast-moving.

---

## Instruction hierarchy

```
CLAUDE.md
    ↓
DESIGN_ORCHESTRATOR.md (this file)
    ↓
Specialist skills
    ├── design-dna    — understand a reference
    ├── genjutsu       — primary visual/UI orchestrator
    ├── motion-design  — decide what motion should feel like and mean
    └── gsap-skills    — implement motion in code, when GSAP is the right tool
```

## Workflow (when a visual reference is involved)

```
REFERENCE
    ↓
Design DNA
    ↓
Extract reusable design language
    ↓
Genjutsu
    ├── paint → new visual system / major design work
    └── cast  → refinement / existing UI
    ↓
Motion Design
    ↓
Define motion direction when meaningful motion is required
    ↓
GSAP Skills
    ↓
Implement GSAP only when technically appropriate
```

This is the full pipeline for reference-driven, substantial visual work. It is not mandatory end-to-end for every task — see Conditional workflow below for when to enter or skip stages. When there is no reference, the pipeline simply starts at Genjutsu instead of Design DNA. When there is no meaningful motion, it ends at Genjutsu. GSAP is only ever reached if Motion Design's direction actually needs it over CSS/native behavior.

## Specialist responsibilities

### design-dna
**Owns:** turning a visual reference into an understood, quantified visual language — never into a copy.

Use for: analyzing screenshots/URLs, extracting typography, color, spacing, composition, shape, elevation, imagery, visual effects, and overall visual personality into a structured profile.

Installed capability (verified against the installed `SKILL.md`, not assumed): a 3-phase workflow — Structure (show the schema), Analyze (produce a Design DNA JSON from references, using deterministic pixel-color measurement rather than eyeballing hex values), Generate (apply a DNA JSON to our own content). All three dimensions — design_system (tokens), design_style (qualitative feel), visual_effects — get populated, not just colors/type.

**Boundary:** design-dna explains *what a reference's visual language is*. It does not decide our layout, our IA, or our components — that's genjutsu's job. Its output (the DNA JSON, or the Generate-phase draft) is an input genjutsu evaluates against our product direction, never a final implementation.

### GENJUTSU — PRIMARY VISUAL/UI ORCHESTRATOR

Genjutsu is the primary visual-system and interaction-design specialist.

Use its two workflows according to the task:

- **`paint`** → Use when creating or establishing a new visual direction/system, especially for new pages, major redesigns, or design-from-scratch work.
- **`cast`** → Use when improving, refining, or adding interaction/motion to an existing interface.
- **`bunshin`** → Whole-site/app build or full redesign via parallel subagents (uses `impeccable` for direction, genjutsu for motion). Announces its cost and asks twice before starting. Heavy — **not** for single pages or refinements; only use when the user explicitly wants a full-site build.

**Supporting skills (not part of the main pipeline):** `impeccable` for critique/audit/polish passes on existing UI (hierarchy, a11y, responsive, UX copy), and `ui-ux-pro-max` as a searchable reference for palettes, font pairings and style options. Use them to review or inform genjutsu's output, not to replace it.

Genjutsu is responsible for:
- visual system
- layout and composition
- UI hierarchy
- component design
- interaction direction
- visual consistency
- responsive behavior
- implementation direction

When Design DNA has extracted a reference, Genjutsu should use that Design DNA as an input rather than copying the reference directly.

Genjutsu should remain the primary orchestrator for substantial visual/UI work, while Motion Design and GSAP act as specialist layers when their expertise is needed.

*(Verified against the installed skills: both `cast` and `paint` already auto-load their own internal foundation sub-skills — `motion-principles`, `mobile-principles`/`desktop-principles`, `design-audit`, and a bundled `gsap` sub-skill — based on detected stack, without needing anything else invoked. `paint` runs a mandatory brainstorm → visual+interaction thesis → design system → implement → audit pipeline, with a "light scope" shortcut for work that doesn't warrant the full thing; `cast` adapts existing UI and scope-matches automatically, e.g. a single hover doesn't trigger a full pipeline.)*

### motion-design (LottieFiles)
**Owns:** motion *meaning* — personality, timing, easing, choreography, sequencing, animation hierarchy, interaction feedback, and reduced-motion behavior, grounded in the "Three Pillars" (emotional intent, visual narrative, motion craft) and Disney's 12 principles adapted for UI.

Use when a task involves meaningful motion design — not for a single opacity fade that genjutsu's built-in motion-principles foundation already covers adequately.

Motion personality for this product: **confident, precise, purposeful, editorial, restrained.** No unnecessary animation, no excessive bounce, no flashy/distracting effects — this is an enterprise B2B agency site, not a consumer/lifestyle brand.

**Boundary:** motion-design decides *why a motion should feel a certain way and what shape it takes conceptually*. It does not write code — that's gsap-skills or genjutsu's implementation step.

### gsap-skills (official GreenSock plugin)
**Owns:** GSAP implementation, once GSAP is actually the right tool. 8 sub-skills, verified against the installed `SKILL.md` files: `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-utils`, `gsap-react`, `gsap-performance`, `gsap-frameworks`.

Use the smallest relevant sub-skill: basic tween → `gsap-core`; sequencing → `gsap-timeline`; scroll interaction → `gsap-scrolltrigger`; React/Next.js integration → `gsap-react`; advanced effects (Flip, Draggable, SplitText, etc.) → `gsap-plugins`.

**Do not use GSAP when CSS/native browser behavior is sufficient** — this is stated as an explicit rule inside genjutsu's own `cast`/`paint` skills too ("stack with no detected animation library → prefer native APIs before proposing a dependency"), so the two are already aligned on this.

Note: this is an Astro site (not React), so `gsap-react` will rarely apply — prefer `gsap-core`/`gsap-timeline`/`gsap-scrolltrigger` directly against vanilla DOM/Astro islands.

---

## Conditional workflow

Do not force every task through every skill. Simple tasks stay simple.

1. **Is there a visual reference?** → design-dna (Analyze phase) first, to understand it before anything else touches it.
2. **Is this a substantial UI/UX or interaction change?** → genjutsu (`paint` for new/from-scratch visual direction, `cast` for refining/adding interaction to existing UI).
3. **Does the task require meaningful motion design?** → motion-design, for the *why/what it should feel like*.
4. **Does the motion require GSAP?** → the smallest relevant gsap-skills sub-skill, for the *how*.

Examples:
- Changing text → no design skills.
- Adjusting spacing → usually no full orchestration.
- Redesigning a page → design-dna (if a reference exists) + genjutsu `paint`.
- Designing a complex interaction on an existing page → genjutsu `cast` + motion-design.
- Implementing complex scroll animation → motion-design (feel/timing) + `gsap-scrolltrigger` (implementation). Genjutsu still owns whether the interaction pattern is right in the first place.

## Implementation principles

Before a substantial design change:

1. Understand the existing implementation.
2. Identify the relevant design problem.
3. Determine which specialist skills are actually needed (conditional workflow above).
4. Establish the design/interaction direction.
5. Implement the smallest appropriate solution.
6. Review the result against this file's product design direction.
7. Avoid unnecessary complexity — no new animation library if an existing project dependency solves it; prefer existing project patterns and components.

---

## Overlaps discovered between installed skills, and how they're resolved

Inspected directly from each skill's installed `SKILL.md` (not assumed from names):

1. **genjutsu bundles its own internal `gsap` sub-skill** (`_jutsu/gsap/SKILL.md`), separate from the dedicated `gsap-skills` plugin's 8 sub-skills. **Resolution:** genjutsu's internal copy is what `cast`/`paint` load automatically as part of their own pipeline — leave that alone, it's how genjutsu functions internally. When GSAP implementation detail is the actual question (which plugin, how ScrollTrigger scrub works, React cleanup patterns), defer explicitly to the matching `gsap-skills` sub-skill — it's official, deeper, and more current than genjutsu's bundled copy.

2. **genjutsu bundles its own `motion-principles` sub-skill**, which overlaps with the standalone `motion-design` (LottieFiles) skill — both cover timing, easing, and reduced-motion. **Resolution:** genjutsu's version is the lean foundation that keeps its own pipeline consistent; it's sufficient for scoped `cast` work. For anything where motion is carrying real brand/narrative weight (a hero sequence, a signature interaction, choreographing multiple elements), consult `motion-design` explicitly for the *feel* before genjutsu implements it — don't let genjutsu's built-in default silently stand in for a real motion-personality decision.

3. **design-dna's Generate phase and genjutsu `paint`'s visual-thesis brainstorm can both produce "a visual direction."** They are not actually redundant, but the order matters — this is exactly what the Workflow diagram above encodes. **Resolution:** if a reference exists, run design-dna's Analyze phase first to get the quantified DNA JSON. Feed that DNA into genjutsu `paint`'s brainstorm as an input/constraint, rather than letting `paint` brainstorm a visual identity from zero while a relevant reference already exists. If no reference exists, `paint`'s own brainstorm is the right (and only) starting point.

No hard conflicts (nothing where two skills give contradictory instructions) — the three points above are ordering/authority questions, resolved above.

## Origin

This orchestrator and its specialist skills (`bunshin`, `cast`, `paint`, `design-dna`, `motion-design`, `gsap-core`/`gsap-timeline`/`gsap-scrolltrigger`/`gsap-plugins`/`gsap-utils`/`gsap-react`/`gsap-performance`/`gsap-frameworks`, plus the supporting `impeccable` and `ui-ux-pro-max` skills) were copied from the `zennly-marketplace` project and adapted here for MOBILISE's brand/product direction. See `skills-lock.json` for skill provenance/sources.
