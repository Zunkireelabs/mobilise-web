For any substantial design/UI/interaction/motion work, follow `DESIGN_ORCHESTRATOR.md` — it defines which design skill (design-dna, genjutsu, motion-design, gsap-skills) to use and when. Simple changes (copy edits, minor spacing) don't need it.

## Stack

Astro (static output), real `.astro` components throughout `src/components/` — not raw HTML strings. `src/pages/index.astro` assembles the homepage from `src/components/sections/*.astro`. No React/Vue/etc.; interactivity is plain `<script>` blocks (vanilla DOM, light TS typing) scoped to the component that needs it.

**Build/stick to real Astro components for any new page or component — this is not optional:**
- Write markup directly in the `.astro` file's template (real template syntax), not `set:html` of an HTML string from `src/data/`. The whole project used to be built the opposite way (`RawSection.astro` injecting raw scraped HTML) and every section/Header/Footer was migrated off that pattern — don't reintroduce it for new work.
- Repeated content (cards, list items, nav entries) → a typed data array in the component's frontmatter + a `.map()` loop, not hand-copied blocks.
- Styles for markup you write directly in the component go in that component's own `<style>` block — Astro auto-scopes it (adds its own `data-astro-cid-*` hash to both the elements and the selectors), so it just works with no manual scoping needed.
- Exception, and the only reason to still reach for a literal raw-string `set:html`: large, precision-sensitive content where hand-retyping risks silent corruption — e.g. generated SVG animation path data, or markup an existing `<script>` depends on via many exact selectors. In that situation, inline the content as a `const foo = \`...\`;` in the same component file (never a separate `src/data/*.html` file) and say in a comment why it's not real JSX.
- Watch for shared utility classes (`.text`, `.tone--*`, `.weight--*`, `.column`, `.button`, `.eyebrow`, `.link`, `.panel*`, `.rails`, `.section*`) — these live in the global `reference-*.css` stylesheets and are still gated behind their original scrape-era `data-astro-cid-xxxxxxxx` attribute (not just the class name). An element using one of these classes needs that attribute too, or the styling silently drops (this caused a real width/heading regression during the migration — see git history). Classes that are genuinely specific to your new component don't need this; only the shared/global ones do.

## Work fast, don't over-investigate

For a single-section edit (restyling/rebuilding one existing component), keep investigation tight:
- Find the component and its styles, skim the immediate surrounding convention (naming, tokens, how a similar nearby block was done), then implement. Don't fully reverse-engineer the whole CSS/scoping architecture before writing anything.
- Don't try to stand up a dev server, hunt for a screenshot/browser tool, or otherwise chase full visual verification when none is readily available in this environment — a dev server is usually already running (check `http://localhost:4321` first) or isn't needed at all. If visual verification genuinely isn't possible here, say so plainly instead of spending time searching for a way to do it.
- Prefer the simplest reliable edit mechanism available (Edit tool, or a short scoped script only when a file is one huge minified line) — don't build elaborate tooling for a routine change.
- If a task is clearly ballooning in scope or time, stop and check in rather than continuing to dig.
