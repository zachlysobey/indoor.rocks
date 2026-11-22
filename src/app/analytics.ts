// The Google Tag Manager container to load on every page, or undefined to load none. Which tags it
// fires (GA4 and the rest) is configured in GTM, not here. It's read at build time, so only builds
// that set it (the deploy workflow) report traffic; dev and CI builds don't.
export function gtmContainerId(value = process.env.NEXT_PUBLIC_GTM_ID): string | undefined {
  if (!value) return undefined;
  // Fail the build rather than ship a container that silently loads nothing.
  if (!/^GTM-[A-Z0-9]+$/.test(value))
    throw new Error(`NEXT_PUBLIC_GTM_ID isn't a Tag Manager container ID: "${value}"`);
  return value;
}
