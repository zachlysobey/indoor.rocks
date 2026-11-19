import { distance } from "./distance";
import { dot } from "./dot";
import type { Point } from "./Point";

/* How far a point is from the nearest edge of a polygon, inside or out. */
export function polygonEdgeDistance(polygon: Point[], p: Point): number {
  return Math.min(
    ...polygon.map((a, i) => {
      const b = polygon[(i + 1) % polygon.length];
      const ab = { x: b.x - a.x, y: b.y - a.y };
      const t = Math.max(0, Math.min(1, dot({ x: p.x - a.x, y: p.y - a.y }, ab) / dot(ab, ab)));
      return distance(p, { x: a.x + t * ab.x, y: a.y + t * ab.y });
    }),
  );
}
