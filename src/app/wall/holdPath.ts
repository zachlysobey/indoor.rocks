import type { Point } from "./geometry/Point";

/* An SVG path for a hold: a smooth, lumpy closed shape centered on the origin, made from a ring of
   jittered points joined with a Catmull-Rom spline. Stays within `extent` of the center; `squash`
   below 1 flattens it into a crimp or an edge. */
export function holdPath(extent: number, squash: number, random: () => number): string {
  const count = 5 + Math.floor(random() * 3);
  const points = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + (random() - 0.5) * 0.6;
    const r = extent * (0.6 + random() * 0.4);
    return { x: Math.cos(angle) * r, y: Math.sin(angle) * r * squash };
  });
  const at = (i: number) => points[(i + count) % count];
  const fmt = ({ x, y }: Point) => `${x.toFixed(1)},${y.toFixed(1)}`;

  let d = `M${fmt(points[0])}`;
  for (let i = 0; i < count; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += `C${fmt(c1)} ${fmt(c2)} ${fmt(p2)}`;
  }
  return `${d}Z`;
}
