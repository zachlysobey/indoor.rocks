import type { Point } from "./geometry/Point";
import type { seededRandom } from "./seededRandom";

/* Colors holds by route: `count` wavy lines running up a wall `width` wide, each with its own color.
   Returns a function giving any point the color of the nearest line, so holds read as routes however
   they're spread. */
export function routeColoring(
  random: ReturnType<typeof seededRandom>,
  { width, count, colors }: { width: number; count: number; colors: readonly string[] },
): (at: Point) => string {
  const routes = Array.from({ length: count }, (_, k) => ({
    x: ((k + 0.5) * width) / count,
    sway: random.between(30, 90),
    wavelength: random.between(250, 600),
    phase: random.between(0, Math.PI * 2),
    color: colors[k % colors.length],
  }));
  const offset = ({ x, y }: Point, route: (typeof routes)[number]) =>
    Math.abs(x - route.x - route.sway * Math.sin(y / route.wavelength + route.phase));

  return (at) => routes.reduce((a, b) => (offset(at, b) < offset(at, a) ? b : a)).color;
}
