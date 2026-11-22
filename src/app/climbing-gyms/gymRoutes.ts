// Where a gym lives: its own page, and the map with it in focus (or the map alone), plus the
// gyms' landing page that leads to the ways of browsing them. The pages link to each other through
// these, so none hard-codes another's URL. Trailing slashes match `trailingSlash`. The map page's
// canonical URL drops ?focus=, so search engines see one map page, and each gym's one URL is its
// own page.
//
// A gym's page sits under /climbing-gym/, not /climbing-gyms/, so no gym's slug can collide with a
// page of the browsing ones (map/, list/, chains/).
export const gymRoutes = {
  index: (): string => "/climbing-gyms/",
  page: (slug: string): string => `/climbing-gym/${slug}/`,
  map: (slug?: string): string => `/climbing-gyms/map/${slug ? `?focus=${slug}` : ""}`,
  // Every gym on one page, by state, without the map.
  list: (): string => "/climbing-gyms/list/",
  // Every chain, biggest first, with its gyms.
  chains: (): string => "/climbing-gyms/chains/",
};
