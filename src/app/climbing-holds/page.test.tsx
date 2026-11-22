import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { describeLinkPage } from "../linkPageChecks";
import ClimbingHoldsPage from "./page";

describeLinkPage("climbing holds page", ClimbingHoldsPage);

describe("Escape's Black November callout", () => {
  // The page decides when it's imported, so import a fresh copy at the given time.
  async function renderAt(time: string) {
    vi.setSystemTime(new Date(time));
    vi.resetModules();
    const { default: Page } = await import("./page");
    return renderToStaticMarkup(<Page />);
  }

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows through November", async () => {
    expect(await renderAt("2026-11-30T23:59:00-05:00")).toContain("Black November");
  });

  it("is gone once December starts", async () => {
    expect(await renderAt("2026-12-01T00:00:00-05:00")).not.toContain("Black November");
  });
});
