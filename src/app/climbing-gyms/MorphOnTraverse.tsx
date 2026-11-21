"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { onPopStateFirst } from "../PopStateFirst";
import { gymRoutes } from "./gymRoutes";

type Props = {
  // The transition types for moving from the list to a gym's page, and back.
  open: string[];
  close: string[];
};

const list = gymRoutes.list();
const isGymPage = (path: string) => path.startsWith(list) && path !== list;

// Back and Forward between the list and a gym's page, animated like the expand and collapse links.
//
// Next handles Back and Forward in the browser's popstate event, and React finishes any transition
// started inside popstate synchronously (so the browser can restore scroll), which never animates.
// So for just these two moves, this catches popstate before Next does (capture runs first, and
// stopImmediatePropagation keeps Next's listener from running), then replays the same URL just
// after the event with router.replace, which writes the same history entry Next would have.
// Every other Back and Forward is left to Next.
export function MorphOnTraverse({ open, close }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const rendered = useRef(pathname);
  useEffect(() => {
    rendered.current = pathname;
  });

  useEffect(
    () =>
      onPopStateFirst(() => {
        const from = rendered.current;
        const to = window.location.pathname;
        const types =
          from === list && isGymPage(to) ? open : isGymPage(from) && to === list ? close : undefined;
        if (!types) return false;
        const href = window.location.href;
        setTimeout(() => router.replace(href, { scroll: false, transitionTypes: types }));
        return true;
      }),
    [router, open, close],
  );

  return null;
}
