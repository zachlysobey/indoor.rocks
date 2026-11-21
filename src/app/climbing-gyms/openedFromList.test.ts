import { describe, expect, it } from "vitest";
import { openedFromList } from "./openedFromList";

describe("openedFromList", () => {
  it("knows only the gym the list last opened", () => {
    expect(openedFromList.is("vital-brooklyn")).toBe(false);
    openedFromList.mark("vital-brooklyn");
    expect(openedFromList.is("vital-brooklyn")).toBe(true);
    openedFromList.mark("movement-gowanus");
    expect(openedFromList.is("vital-brooklyn")).toBe(false);
    expect(openedFromList.is("movement-gowanus")).toBe(true);
  });
});
