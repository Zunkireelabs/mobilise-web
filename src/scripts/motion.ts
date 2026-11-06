/**
 * Scroll-reveal for [data-motion-rise] elements, staggered within their
 * nearest [data-section] ancestor. Ported from the reference build's inline
 * IntersectionObserver script — same stagger/timing, trimmed to the one
 * motion type this site actually uses.
 */
export function initMotion(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = [...document.querySelectorAll<HTMLElement>('[data-motion-rise]')];
  if (!targets.length) return;

  const groups = new Map<Element, HTMLElement[]>();
  for (const el of targets) {
    const section = el.closest('[data-section]') ?? document.body;
    groups.set(section, [...(groups.get(section) ?? []), el]);
  }
  for (const group of groups.values()) {
    group
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      .forEach((el, i) => {
        if (!el.style.getPropertyValue('--motion-delay')) {
          el.style.setProperty('--motion-delay', `${i * 90}ms`);
        }
      });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        entry.target.setAttribute('data-motion-in', '');
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 }
  );
  targets.forEach((el) => observer.observe(el));
}
