For any substantial design/UI/interaction/motion work, follow `DESIGN_ORCHESTRATOR.md` — it defines which design skill (design-dna, genjutsu, motion-design, gsap-skills) to use and when. Simple changes (copy edits, minor spacing) don't need it.

## Work fast, don't over-investigate

For a single-section edit (restyling/rebuilding one existing component), keep investigation tight:
- Find the component and its styles, skim the immediate surrounding convention (naming, tokens, how a similar nearby block was done), then implement. Don't fully reverse-engineer the whole CSS/scoping architecture before writing anything.
- Don't try to stand up a dev server, hunt for a screenshot/browser tool, or otherwise chase full visual verification when none is readily available in this environment — a dev server is usually already running (check `http://localhost:4321` first) or isn't needed at all. If visual verification genuinely isn't possible here, say so plainly instead of spending time searching for a way to do it.
- Prefer the simplest reliable edit mechanism available (Edit tool, or a short scoped script only when a file is one huge minified line) — don't build elaborate tooling for a routine change.
- If a task is clearly ballooning in scope or time, stop and check in rather than continuing to dig.
