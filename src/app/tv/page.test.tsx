import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { describeLinkPage } from "../linkPageChecks";
import IndoorClimbingTvPage from "./page";

describeLinkPage("indoor climbing TV page", IndoorClimbingTvPage);

describe("Pro Climbing League 2027 callout", () => {
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

  it("shows through the London final", async () => {
    expect(await renderAt("2027-03-20T23:59:00Z")).toContain("2027 season");
  });

  it("is gone once the season is over", async () => {
    expect(await renderAt("2027-03-21T00:00:00Z")).not.toContain("2027 season");
  });
});
