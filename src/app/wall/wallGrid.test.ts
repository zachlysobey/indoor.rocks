import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { wallGrid } from "./wallGrid";

// The wall background is painted by globals.css; the holds are laid out from wallGrid. If the two
// drift apart, holds land between t-nuts and on seams.
describe("wallGrid", () => {
  const css = readFileSync(new URL("../globals.css", import.meta.url), "utf8");
  const property = (name: string) => css.match(new RegExp(`${name}:\\s*([^;]+);`))?.[1].trim();

  it("has the hole gap globals.css paints", () => {
    expect(property("--hole-gap")).toBe(`${wallGrid.holeGap}px`);
  });

  it("has the panel size globals.css paints", () => {
    const holes = (name: string) => Number(property(name)?.match(/calc\((\d+) \* var\(--hole-gap\)\)/)?.[1]);
    expect(holes("--panel-w") * wallGrid.holeGap).toBe(wallGrid.panelWidth);
    expect(holes("--panel-h") * wallGrid.holeGap).toBe(wallGrid.panelHeight);
  });

  it("offsets the seams the way globals.css does", () => {
    expect(property("--seam-offset")).toBe("calc(var(--hole-gap) / 4)");
    expect(wallGrid.seamOffset).toBe(wallGrid.holeGap / 4);
  });
});

describe("wallGrid.seamClearance", () => {
  const { seamOffset, panelWidth, panelHeight } = wallGrid;

  it("is zero on a seam", () => {
    expect(wallGrid.seamClearance({ x: seamOffset, y: 300 })).toBe(0);
    expect(wallGrid.seamClearance({ x: 100, y: seamOffset + panelHeight })).toBe(0);
  });

  it("measures to the nearer seam, vertical or horizontal", () => {
    expect(wallGrid.seamClearance({ x: seamOffset + 10, y: seamOffset + 50 })).toBe(10);
    expect(wallGrid.seamClearance({ x: seamOffset + panelWidth - 7, y: 200 })).toBe(7);
  });
});
