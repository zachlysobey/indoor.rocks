// The gym whose page the list last opened, so that page knows it can send Escape back to the list,
// the way Escape closes a dialog. Module state: it lasts as long as client-side navigation does, so
// a page loaded fresh (a shared link, a search result) starts with nothing marked.
let opened: string | undefined;

export const openedFromList = {
  mark: (slug: string) => {
    opened = slug;
  },
  is: (slug: string): boolean => opened === slug,
};
