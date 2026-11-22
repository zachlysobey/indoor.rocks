import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getData } from "../../getData";
import { gymChains } from "../../gymChains";
import { describeLinkPage } from "../../linkPageChecks";
import GymChainsPage from "./page";

describeLinkPage("chains page", GymChainsPage);

describe("chains page", () => {
  const html = renderToStaticMarkup(<GymChainsPage />);
  const chains = gymChains(getData().climbingGyms);

  it("lists every chain, biggest first", () => {
    // Each chain's heading as React writes it ("Grotto Climbing &amp; Yoga"), whole, so it can't match
    // a gym whose name starts with a chain's.
    const positions = chains.map(({ company }) => {
      const name = company.name.replaceAll("&", "&amp;");
      return html.indexOf(company.website ? `>${name} ↗</a>` : `<span>${name}</span>`);
    });
    expect(positions).not.toContain(-1);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });

  it("links out to each chain's website", () => {
    for (const { company } of chains) if (company.website) expect(html).toContain(`href="${company.website}"`);
  });
});
