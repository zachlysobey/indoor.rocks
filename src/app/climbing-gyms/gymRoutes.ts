// Where a gym lives: its own page, and the list with it in focus (or the list alone). The two pages
// link to each other through these, so neither hard-codes the other's URL. Trailing slashes match
// `trailingSlash`. The list page's canonical URL drops ?focus=, so search engines see one list page,
// and each gym's one URL is its own page.
export const gymRoutes = {
  page: (slug: string): string => `/climbing-gyms/${slug}/`,
  list: (slug?: string): string => `/climbing-gyms/${slug ? `?focus=${slug}` : ""}`,
};
