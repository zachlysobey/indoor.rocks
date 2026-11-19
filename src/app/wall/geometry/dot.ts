import type { Point } from "./Point";

export function dot(a: Point, b: Point): number {
  return a.x * b.x + a.y * b.y;
}
