import type { Point } from "./Point";

/* A uniformly random point in a convex polygon: fan it into triangles, pick one by area, then a
   point in that triangle. */
export function randomPointInPolygon(polygon: Point[], random: () => number): Point {
  const [p0, ...rest] = polygon;
  const triangles = rest.slice(0, -1).map((p, i) => [p0, p, rest[i + 1]]);
  const areas = triangles.map(([a, b, c]) =>
    Math.abs((b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)),
  );
  let pick = random() * areas.reduce((sum, area) => sum + area, 0);
  const [a, b, c] = triangles.find((_, i) => (pick -= areas[i]) <= 0) ?? triangles[0];
  let [u, v] = [random(), random()];
  if (u + v > 1) [u, v] = [1 - u, 1 - v];
  return { x: a.x + u * (b.x - a.x) + v * (c.x - a.x), y: a.y + u * (b.y - a.y) + v * (c.y - a.y) };
}
