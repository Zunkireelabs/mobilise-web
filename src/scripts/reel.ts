/**
 * Mouse drag-to-scroll + live progress thumb for a [data-reel] horizontal
 * card track. Touch/trackpad scrolling already works natively via
 * overflow-x: auto on the reel — this only adds pointer-drag for mouse
 * users and keeps the [data-reel-thumb] progress bar in sync with scroll.
 */
export function initReel(): void {
  if (typeof window === 'undefined') return;

  const reel = document.querySelector<HTMLElement>('[data-reel]');
  if (!reel) return;

  const thumb = document.querySelector<HTMLElement>('[data-reel-thumb]');
  const progressTrack = thumb?.parentElement ?? null;

  const updateThumb = (): void => {
    if (!thumb || !progressTrack) return;
    const maxScroll = reel.scrollWidth - reel.clientWidth;
    const ratio = maxScroll > 0 ? reel.scrollLeft / maxScroll : 0;
    const thumbWidthPct = Math.min(100, (reel.clientWidth / reel.scrollWidth) * 100);
    thumb.style.inlineSize = `${thumbWidthPct}%`;
    const travel = progressTrack.clientWidth - thumb.clientWidth;
    thumb.style.transform = `translateX(${Math.max(0, ratio * travel)}px)`;
  };

  reel.addEventListener('scroll', updateThumb, { passive: true });
  window.addEventListener('resize', updateThumb);
  updateThumb();

  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;
  let moved = 0;

  reel.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') return;
    isDragging = true;
    moved = 0;
    startX = event.clientX;
    scrollStart = reel.scrollLeft;
    reel.setAttribute('data-dragging', '');
    reel.setPointerCapture(event.pointerId);
  });

  reel.addEventListener('pointermove', (event) => {
    if (!isDragging) return;
    const delta = event.clientX - startX;
    moved = Math.max(moved, Math.abs(delta));
    reel.scrollLeft = scrollStart - delta;
  });

  const endDrag = (event: PointerEvent): void => {
    if (!isDragging) return;
    isDragging = false;
    reel.removeAttribute('data-dragging');
    if (reel.hasPointerCapture(event.pointerId)) {
      reel.releasePointerCapture(event.pointerId);
    }
  };

  reel.addEventListener('pointerup', endDrag);
  reel.addEventListener('pointercancel', endDrag);

  reel.addEventListener(
    'click',
    (event) => {
      if (moved > 6) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    { capture: true }
  );
}
