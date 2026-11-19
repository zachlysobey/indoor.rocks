import type { Point } from "./geometry/Point";
import type { seededRandom } from "./seededRandom";

/* How crowded the wall is at each point, from -1 (sparse) to 1 (dense): a few overlapping waves at
   random angles, so the busy and quiet patches are broad and irregular. */
export function crowdingField(random: ReturnType<typeof seededRandom>): (at: Point) => number {
  const waves = Array.from({ length: 3 }, () => {
    const angle = random.between(0, Math.PI * 2);
    const length = random.between(500, 1100);
    return {
      kx: Math.cos(angle) / length,
      ky: Math.sin(angle) / length,
      phase: random.between(0, 7),
    };
  });

  return ({ x, y }) =>
    waves.reduce((sum, w) => sum + Math.sin(2 * Math.PI * (w.kx * x + w.ky * y) + w.phase), 0) /
    waves.length;
}
