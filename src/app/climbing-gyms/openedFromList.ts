// The gym whose page a list last opened, and the list's URL with that gym in focus, so the page knows
// it can send Escape back there, the way Escape closes a dialog, and which list to collapse back to.
// Module state: it lasts as long as client-side navigation does, so a page loaded fresh (a shared
// link, a search result) starts with nothing marked.
let opened: { slug: string; from: string } | undefined;

export const openedFromList = {
  mark: (slug: string, from: string) => {
    opened = { slug, from };
  },
  is: (slug: string): boolean => opened?.slug === slug,
  // The list that opened the gym's page, if one did.
  from: (slug: string): string | undefined => (opened?.slug === slug ? opened.from : undefined),
};
