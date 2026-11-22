import { describe, expect, it } from "vitest";
import { openedFromList } from "./openedFromList";

describe("openedFromList", () => {
  it("knows only the gym the list last opened", () => {
    expect(openedFromList.is("vital-brooklyn")).toBe(false);
    openedFromList.mark("vital-brooklyn", "/climbing-gyms/map/?focus=vital-brooklyn");
    expect(openedFromList.is("vital-brooklyn")).toBe(true);
    openedFromList.mark("movement-gowanus", "/climbing-gyms/map/?focus=movement-gowanus");
    expect(openedFromList.is("vital-brooklyn")).toBe(false);
    expect(openedFromList.is("movement-gowanus")).toBe(true);
  });

  it("knows which list opened it, for that gym only", () => {
    openedFromList.mark("vital-brooklyn", "/climbing-gyms/chains/?focus=vital-brooklyn");
    expect(openedFromList.from("vital-brooklyn")).toBe("/climbing-gyms/chains/?focus=vital-brooklyn");
    expect(openedFromList.from("movement-gowanus")).toBeUndefined();
  });
});
