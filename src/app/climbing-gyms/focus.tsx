"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, type ReactNode } from "react";

// A list's selected gym lives in ?focus= (gymRoutes.map, gymRoutes.chains), so it can be linked to and
// Back deselects it. pushState rather than a router navigation: Next folds it into useSearchParams
// without fetching the page again.
export function focusGym(url: string) {
  window.history.pushState(null, "", url);
}

type Props = {
  children: (focus: string | undefined) => ReactNode;
};

function FromQuery({ children }: Props) {
  return children(useSearchParams().get("focus") ?? undefined);
}

// The gym in ?focus=. The pages are a static export, so it's only known in the browser: the
// prerendered HTML has nothing in focus (the fallback), and the query takes over once it hydrates.
export function WithFocus({ children }: Props) {
  return (
    <Suspense fallback={children(undefined)}>
      <FromQuery>{children}</FromQuery>
    </Suspense>
  );
}
