import { afterEach, describe, expect, it, vi } from "vitest";
import { escapeIsTaken } from "./escapeIsTaken";

class FakeElement {
  isContentEditable = false;
  tagName = "div";
  matches(selector: string) {
    return selector === "input, textarea, select" && ["input", "textarea", "select"].includes(this.tagName);
  }
}

afterEach(() => vi.unstubAllGlobals());

describe("escapeIsTaken", () => {
  function check(overrides: Record<string, unknown> = {}, activeElement: FakeElement | null = null) {
    vi.stubGlobal("HTMLElement", FakeElement);
    vi.stubGlobal("document", { activeElement });
    const event = {
      defaultPrevented: false,
      isComposing: false,
      altKey: false,
      ctrlKey: false,
      metaKey: false,
      shiftKey: false,
      ...overrides,
    } as unknown as KeyboardEvent;
    return escapeIsTaken(event);
  }

  it("accepts an ordinary Escape event", () => {
    expect(check()).toBe(false);
  });

  it("ignores already handled, composing, or modified events", () => {
    for (const flag of ["defaultPrevented", "isComposing", "altKey", "ctrlKey", "metaKey", "shiftKey"]) {
      expect(check({ [flag]: true }), flag).toBe(true);
    }
  });

  it("ignores events while typing or editing", () => {
    const input = new FakeElement();
    input.tagName = "input";
    expect(check({}, input)).toBe(true);
    const editable = new FakeElement();
    editable.isContentEditable = true;
    expect(check({}, editable)).toBe(true);
  });
});
