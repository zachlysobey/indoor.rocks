import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getData } from "./getData";

// Every gym file, like "nc-gyms/bigfootClimbingGym.ts": not the folder's index or a test.
const dataDir = join(__dirname, "data");
const gymFiles = readdirSync(dataDir, { recursive: true, encoding: "utf8" })
  .filter(file => /^[a-z-]+-gyms\/\w+\.ts$/.test(file) && !file.endsWith("/index.ts"));

describe("getData", () => {
  const gyms = getData().climbingGyms;

  it("finds the gym files", () => {
    expect(gymFiles.length).toBeGreaterThan(0);
  });

  // A file missing from its folder's index.ts, or a folder missing from getData, would otherwise
  // drop its gyms from the site without a sound.
  it.each(gymFiles)("includes the gym in %s", async file => {
    const exports = Object.values(await import(join(dataDir, file)));
    expect(exports.length).toBeGreaterThan(0);
    for (const gym of exports) expect(gyms).toContain(gym);
  });
});
