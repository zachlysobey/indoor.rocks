import { crowdingField } from "./crowdingField";
import { distance } from "./geometry/distance";
import type { Point } from "./geometry/Point";
import { polygonContains } from "./geometry/polygonContains";
import { polygonEdgeDistance } from "./geometry/polygonEdgeDistance";
import { randomPointInPolygon } from "./geometry/randomPointInPolygon";
import { holdPath } from "./holdPath";
import { routeColoring } from "./routeColoring";
import { seededRandom } from "./seededRandom";
import { volumeShape } from "./volumeShape";
import { wallGrid } from "./wallGrid";

// Covers the widest screens and the tallest pages we have; the layer clips to the page.
const WIDTH = 2560;
const HEIGHT = 2400;

const VOLUME_COUNT = 24; // at most; a volume that can't find room is left out
const VOLUME_SIZE = [90, 190] as const; // center to edge, roughly
const VOLUME_GAP = 30; // minimum clearance between two volumes

// Typical distance between two holds on the wall. It drifts across the wall with the crowding
// field, from 0.55× to 1.45× this, so holds cluster in places and thin out in others.
const HOLD_SPACING = 130;
const HOLD_EXTENT = [12, 26] as const; // a hold's reach from its bolt, on the wall
const VOLUME_HOLD_EXTENT = [10, 20] as const; // ...and on a volume, where faces are smaller
const HOLDS_PER_VOLUME = [1, 3] as const;
const CLEARANCE = 5; // between a hold's edge and a seam or volume edge

const ROUTE_COUNT = 14;
// Muted, mid-tone colors with a few neutrals. The stylesheet blends them toward the wall color, so
// what shows is quieter still.
const HOLD_COLORS = [
  "#b0563a", // rust
  "#4a6f9a", // steel blue
  "#c08a3e", // ochre
  "#3d3936", // charcoal
  "#4f8a7a", // teal
  "#a2506e", // plum
  "#c9c2b8", // bone
  "#7a8f4e", // olive
  "#6e5a96", // violet
  "#8a8580", // gray
  "#9c6b4e", // clay
  "#5f7f8f", // slate
];

type Random = ReturnType<typeof seededRandom>;
type Shape = ReturnType<typeof volumeShape>;
type Hold = { at: Point; extent: number; rotation: number; path: string; color: string };

/* Where the volumes and holds go on the background wall, in page pixels. The same seed always lays
   out the same wall. Volumes never overlap; holds on the wall sit on t-nuts (lined up with the grid
   globals.css paints) clear of panel seams and volumes; holds on a volume sit wholly inside one of
   its faces. */
export function wallLayout(seed: number) {
  const random = seededRandom(seed);
  const colorAt = routeColoring(random, { width: WIDTH, count: ROUTE_COUNT, colors: HOLD_COLORS });
  const volumes = placeVolumes(random);
  const holds = [
    ...placeWallHolds(random, volumes, crowdingField(random)),
    ...placeVolumeHolds(random, volumes),
  ].map(({ at, extent }) => ({
    at,
    extent,
    rotation: random.between(0, 360),
    path: holdPath(extent, random.between(0.45, 1), random.next),
    color: colorAt(at),
  })) satisfies Hold[];

  return { volumes: volumes.map(({ faces, outline }) => ({ faces, outline })), holds };
}

/* Best-candidate sampling: of several random tries, keep the volume with the most room around it,
   and only if it clears every volume already placed. That spreads them out evenly. */
function placeVolumes(random: Random): Shape[] {
  const volumes: Shape[] = [];
  for (let i = 0; i < VOLUME_COUNT; i++) {
    let best: Shape | undefined;
    let bestRoom = -Infinity;
    for (let tries = 0; tries < 25; tries++) {
      const shape = volumeShape(
        { x: random.between(0, WIDTH), y: random.between(0, HEIGHT) },
        random.between(...VOLUME_SIZE),
        random,
      );
      const room = Math.min(
        ...volumes.map((v) => distance(v.center, shape.center) - v.radius - shape.radius),
      );
      if (room > bestRoom) [best, bestRoom] = [shape, room];
    }
    if (best && bestRoom >= VOLUME_GAP) volumes.push(best);
  }
  return volumes;
}

/* Visit the t-nut lattice in random order, keeping each spot that's far enough from the holds
   already placed (how far depends on how crowded that part of the wall is) and off every volume.
   Each hold is sized to clear the nearest seam and volume edge. */
function placeWallHolds(random: Random, volumes: Shape[], crowding: (at: Point) => number) {
  const { step } = wallGrid;
  const lattice: Point[] = [];
  for (let b = 1; b * step < HEIGHT; b++) {
    for (let a = b % 2; a * step < WIDTH; a += 2) lattice.push({ x: a * step, y: b * step });
  }

  const holds: { at: Point; extent: number }[] = [];
  for (const at of random.shuffle(lattice)) {
    const spacing = HOLD_SPACING * (1 - 0.45 * crowding(at));
    if (holds.some((h) => distance(h.at, at) < spacing)) continue;
    if (volumes.some((v) => polygonContains(v.outline, at))) continue;
    const room = Math.min(
      wallGrid.seamClearance(at),
      ...volumes.map((v) => polygonEdgeDistance(v.outline, at)),
    );
    const extent = Math.min(random.between(...HOLD_EXTENT), room - CLEARANCE);
    if (extent >= HOLD_EXTENT[0]) holds.push({ at, extent });
  }
  return holds;
}

/* A few holds per volume, each sized to sit wholly inside one face so none straddles an edge. */
function placeVolumeHolds(random: Random, volumes: Shape[]) {
  return volumes.flatMap(({ faces }) => {
    const wanted = Math.floor(random.between(HOLDS_PER_VOLUME[0], HOLDS_PER_VOLUME[1] + 1));
    const holds: { at: Point; extent: number }[] = [];
    for (let tries = 0; tries < 60 && holds.length < wanted; tries++) {
      const face = random.pick(faces).points;
      const at = randomPointInPolygon(face, random.next);
      const room = polygonEdgeDistance(face, at);
      const extent = Math.min(random.between(...VOLUME_HOLD_EXTENT), room - CLEARANCE);
      if (extent < VOLUME_HOLD_EXTENT[0]) continue;
      if (holds.some((h) => distance(h.at, at) < h.extent + extent + 8)) continue;
      holds.push({ at, extent });
    }
    return holds;
  });
}
