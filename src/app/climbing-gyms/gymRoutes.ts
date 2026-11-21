// Where a gym lives: its own page, and the list with it selected. The two pages link to each other
// through these, so neither hard-codes the other's URL. Trailing slashes match `trailingSlash`.
export const gymRoutes = {
  page: (slug: string): string => `/climbing-gyms/${slug}/`,
  list: (slug: string): string => `/climbing-gyms/?gym=${slug}`,
};
