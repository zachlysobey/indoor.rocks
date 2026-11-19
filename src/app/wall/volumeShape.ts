import { distance } from "./geometry/distance";
import { dot } from "./geometry/dot";
import { normalize } from "./geometry/normalize";
import type { Point } from "./geometry/Point";
import type { seededRandom } from "./seededRandom";

// Light from the upper left, as on most product shots of climbing walls.
const LIGHT = normalize({ x: -1, y: -1.4 });

// `light` runs from -1 (facing straight away from the light) to 1 (facing right into it).
type Face = { points: Point[]; light: number };

/* A random volume around `center`, about `size` from center to edge: either a three-sided pyramid
   or a flat-topped box. Its faces are convex, each lit by which way it faces; `outline` is its
   footprint on the wall and `radius` a circle around that. */
export function volumeShape(center: Point, size: number, random: ReturnType<typeof seededRandom>) {
  const { outline, faces } =
    random.next() < 0.5 ? pyramid(center, size, random) : box(center, size, random);
  return { faces, outline, center, radius: Math.max(...outline.map((p) => distance(p, center))) };
}

/* A lopsided triangle base, with the apex pulled off center. */
function pyramid(center: Point, size: number, random: ReturnType<typeof seededRandom>) {
  const start = random.between(0, Math.PI * 2);
  const outline = [0, 1, 2].map((i) => {
    const angle = start + (i * Math.PI * 2) / 3 + random.between(-0.4, 0.4);
    const radius = size * random.between(0.75, 1.1);
    return { x: center.x + Math.cos(angle) * radius, y: center.y + Math.sin(angle) * radius };
  });
  const apex = {
    x: center.x + random.between(-0.2, 0.2) * size,
    y: center.y + random.between(-0.2, 0.2) * size,
  };
  return { outline, faces: sides(outline, [apex, apex, apex]) };
}

/* A rectangle base with a smaller, slightly shifted rectangle on top: four sloped sides and a flat
   top facing out. */
function box(center: Point, size: number, random: ReturnType<typeof seededRandom>) {
  const aspect = random.between(0.6, 1.5);
  const w = size * Math.sqrt(aspect);
  const h = size / Math.sqrt(aspect);
  const inset = random.between(0.4, 0.65);
  const shift = { x: random.between(-0.15, 0.15) * w, y: random.between(-0.15, 0.15) * h };
  const corners = [
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
  ];
  const outline = corners.map((c) => ({
    x: center.x + (c.x * w) / 2,
    y: center.y + (c.y * h) / 2,
  }));
  const top = corners.map((c) => ({
    x: center.x + shift.x + (c.x * w * inset) / 2,
    y: center.y + shift.y + (c.y * h * inset) / 2,
  }));
  // The top faces the viewer, so it catches a little of the light.
  return { outline, faces: [...sides(outline, top), { points: top, light: 0.15 }] };
}

/* The sloped faces between a base outline and the top (an apex, or a smaller outline). */
function sides(base: Point[], top: Point[]): Face[] {
  return base.map((p, i) => {
    const q = base[(i + 1) % base.length];
    const [t1, t2] = [top[i], top[(i + 1) % top.length]];
    const facing = normalize({
      x: (p.x + q.x - t1.x - t2.x) / 2,
      y: (p.y + q.y - t1.y - t2.y) / 2,
    });
    return { points: t1 === t2 ? [p, q, t1] : [p, q, t2, t1], light: dot(facing, LIGHT) };
  });
}
