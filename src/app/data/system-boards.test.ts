import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { systemBoards } from "./system-boards";

const boardsDir = join(__dirname, "system-boards");
const boardFiles = readdirSync(boardsDir).filter(file => file !== "index.ts");

describe("systemBoards", () => {
  it("finds the board files", () => {
    expect(boardFiles.length).toBeGreaterThan(0);
  });

  // A file missing from index.ts would otherwise drop its board from the site without a sound.
  it.each(boardFiles)("includes the board in %s", async file => {
    const exports = Object.values(await import(join(boardsDir, file)));
    expect(exports.length).toBeGreaterThan(0);
    for (const board of exports) expect(systemBoards).toContain(board);
  });

  it("names each board once", () => {
    const names = systemBoards.map(board => board.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
