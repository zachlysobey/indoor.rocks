"use client";

// Lets a page handle Back and Forward before Next does. Next registers its popstate listener when
// the app router mounts, and listeners on window run in the order they were added, so the only way
// ahead of it is a listener added when this module is first evaluated, which is before the app
// hydrates. The root layout renders <PopStateFirst /> so this module is always loaded that early.
//
// A handler returns true to take the event, and Next never sees it.
type Handler = (event: PopStateEvent) => boolean;
const handlers = new Set<Handler>();

if (typeof window !== "undefined") {
  window.addEventListener("popstate", event => {
    for (const handler of handlers) {
      if (handler(event)) {
        event.stopImmediatePropagation();
        return;
      }
    }
  });
}

export function onPopStateFirst(handler: Handler): () => void {
  handlers.add(handler);
  return () => handlers.delete(handler);
}

export function PopStateFirst() {
  return null;
}
