import type { ClimbingGym, Company } from "./dataModel";

export type GymChain = {
  company: Company;
  gyms: ClimbingGym[];
};

// Each company and its gyms (the gyms whose parent it is), biggest first, then by name. Gyms with no
// parent are independents, and aren't in any chain. Gyms keep the order they're given in.
export const gymChains = (gyms: ClimbingGym[]): GymChain[] => {
  const byCompany = new Map<Company, ClimbingGym[]>();
  for (const gym of gyms) {
    if (!gym.parent) continue;
    byCompany.set(gym.parent, [...(byCompany.get(gym.parent) ?? []), gym]);
  }
  return [...byCompany]
    .map(([company, gyms]) => ({ company, gyms }))
    .sort((a, b) => b.gyms.length - a.gyms.length || a.company.name.localeCompare(b.company.name));
};
