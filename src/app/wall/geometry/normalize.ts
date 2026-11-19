import type { Point } from "./Point";

/* The same direction, at length 1. */
export function normalize({ x, y }: Point): Point {
  const length = Math.hypot(x, y) || 1;
  return { x: x / length, y: y / length };
}
