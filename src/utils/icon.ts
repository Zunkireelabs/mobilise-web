import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const iconsDir = require.resolve('lucide-static/package.json').replace(/package\.json$/, 'icons/');

const cache = new Map<string, string>();

/**
 * Returns the raw SVG markup for a lucide-static icon by its kebab-case
 * name (e.g. "arrow-right"). Intended for use with `set:html` in .astro
 * files. Results are cached since icon files are read from disk.
 */
export function getIcon(name: string): string {
  const cached = cache.get(name);
  if (cached) return cached;

  const svg = readFileSync(`${iconsDir}${name}.svg`, 'utf-8');
  cache.set(name, svg);
  return svg;
}
