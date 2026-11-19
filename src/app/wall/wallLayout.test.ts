import { describe, expect, it } from "vitest";
import type { Point } from "./geometry/Point";
import { polygonContains } from "./geometry/polygonContains";
import { polygonEdgeDistance } from "./geometry/polygonEdgeDistance";
import { wallGrid } from "./wallGrid";
import { wallLayout } from "./wallLayout";

/* Whether two convex polygons overlap: they don't if some edge's normal separates their
   projections (the separating axis theorem). */
const overlaps = (a: Point[], b: Point[]) =>
  ![a, b].some((polygon) =>
    polygon.some((p, i) => {
      const q = polygon[(i + 1) % polygon.length];
      const axis = { x: q.y - p.y, y: p.x - q.x };
      const project = (points: Point[]) => points.map((r) => r.x * axis.x + r.y * axis.y);
      const [pa, pb] = [project(a), project(b)];
      return Math.max(...pa) <= Math.min(...pb) || Math.max(...pb) <= Math.min(...pa);
    }),
  );

describe.each([1, 42, 20261118, 4294967295])("wallLayout(%i)", (seed) => {
  const { volumes, holds } = wallLayout(seed);
  const onVolume = (at: Point) => volumes.some((v) => polygonContains(v.outline, at));
  const wallHolds = holds.filter((h) => !onVolume(h.at));
  const volumeHolds = holds.filter((h) => onVolume(h.at));

  it("lays out the same wall every time", () => {
    expect(wallLayout(seed)).toEqual(wallLayout(seed));
  });

  it("places a good number of volumes and holds", () => {
    expect(volumes.length).toBeGreaterThan(10);
    expect(wallHolds.length).toBeGreaterThan(100);
    expect(volumeHolds.length).toBeGreaterThan(volumes.length);
  });

  it("never overlaps two volumes", () => {
    for (const [i, a] of volumes.entries()) {
      for (const b of volumes.slice(i + 1)) expect(overlaps(a.outline, b.outline)).toBe(false);
    }
  });

  it("bolts every hold on the wall to a t-nut", () => {
    for (const { at } of wallHolds) {
      const [a, b] = [at.x / wallGrid.step, at.y / wallGrid.step];
      expect(Number.isInteger(a) && Number.isInteger(b) && (a + b) % 2 === 0).toBe(true);
    }
  });

  it("keeps every hold on the wall clear of panel seams and volumes", () => {
    for (const { at, extent } of wallHolds) {
      expect(wallGrid.seamClearance(at)).toBeGreaterThan(extent);
      for (const v of volumes) expect(polygonEdgeDistance(v.outline, at)).toBeGreaterThan(extent);
    }
  });

  it("keeps every hold on a volume inside a single face", () => {
    for (const { at, extent } of volumeHolds) {
      const faces = volumes.flatMap((v) => v.faces).filter((f) => polygonContains(f.points, at));
      expect(faces).toHaveLength(1);
      expect(polygonEdgeDistance(faces[0].points, at)).toBeGreaterThan(extent);
    }
  });
});
