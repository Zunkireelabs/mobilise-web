import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

function ensureRegistered(): void {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Registers a scroll-triggered GSAP animation and returns a cleanup
 * function that kills the tween and its ScrollTrigger instance.
 * No-op (animation skipped) when the user prefers reduced motion.
 */
export function createScrollAnimation(
  target: gsap.TweenTarget,
  vars: gsap.TweenVars,
  scrollTrigger: ScrollTrigger.Vars
): () => void {
  if (typeof window === 'undefined') return () => {};
  ensureRegistered();

  if (prefersReducedMotion()) {
    return () => {};
  }

  const tween = gsap.from(target, {
    ...vars,
    scrollTrigger,
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}

export { gsap, ScrollTrigger };
