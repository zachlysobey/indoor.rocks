import type { Point } from "./geometry/Point";

/* The t-nut grid and panel layout that globals.css paints on the page background, for laying holds
   out on it. globals.css draws the wall from its own custom properties; wallGrid.test.ts checks
   that these numbers still match them. */
const holeGap = 96;
const panelWidth = 3 * holeGap;
const panelHeight = 6 * holeGap;
// Seams sit a quarter gap off the hole grid, so each panel's edge holes are inset evenly.
const seamOffset = holeGap / 4;

// How far a coordinate is from the nearest seam, for seams every `period` from `seamOffset`.
const fromSeam = (coordinate: number, period: number) => {
  const m = (((coordinate - seamOffset) % period) + period) % period;
  return Math.min(m, period - m);
};

export const wallGrid = {
  holeGap,
  // The two offset hole grids together make a diamond lattice at half the gap: points
  // (a·step, b·step) where a and b are both odd or both even.
  step: holeGap / 2,
  panelWidth,
  panelHeight,
  seamOffset,
  /** How far a point is from the nearest panel seam, across or up and down. */
  seamClearance: ({ x, y }: Point) => Math.min(fromSeam(x, panelWidth), fromSeam(y, panelHeight)),
};
