import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { getData } from "../../getData";
import { gymChains } from "../../gymChains";
import { gymSlug } from "../../gymSlug";
import { describeLinkPage } from "../../linkPageChecks";
import { gymRoutes } from "../gymRoutes";
import GymChainsPage from "./page";

// Rendered outside Next, there's no app router to give these: a fresh load, nothing in focus.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: () => {} }),
  useSearchParams: () => new URLSearchParams(),
}));

describeLinkPage("chains page", GymChainsPage);

describe("chains page", () => {
  const html = renderToStaticMarkup(<GymChainsPage />);
  const chains = gymChains(getData().climbingGyms);

  it("says how many of the gyms are in a chain", () => {
    const gyms = getData().climbingGyms;
    const inChains = gyms.filter(gym => gym.parent).length;
    expect(html).toContain(
      `Of the ${gyms.length} climbing gyms listed, ${inChains} are part of one of ${chains.length} chains.`,
    );
  });

  it("lists every chain, biggest first", () => {
    // Each chain's name as React writes it ("Grotto Climbing &amp; Yoga"), in its own bare <span>, so
    // it can't match a gym whose name starts with a chain's.
    const positions = chains.map(({ company }) =>
      html.indexOf(`<span>${company.name.replaceAll("&", "&amp;")}</span>`),
    );
    expect(positions).not.toContain(-1);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });

  it("starts with every chain collapsed", () => {
    expect(html).not.toContain('aria-expanded="true"');
    expect(html.match(/<ul [^>]*hidden=""/g)).toHaveLength(chains.length);
  });

  it("still links every gym's page, for crawlers", () => {
    for (const { gyms } of chains)
      for (const gym of gyms) expect(html).toContain(`href="${gymRoutes.page(gymSlug(gym))}"`);
  });

  it("links out to each chain's website", () => {
    for (const { company } of chains) if (company.website) expect(html).toContain(`href="${company.website}"`);
  });
});
