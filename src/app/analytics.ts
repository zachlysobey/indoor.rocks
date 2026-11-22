// The GA4 measurement ID to tag pages with, or undefined to leave them untagged. It's read at build
// time, so only builds that set it (the deploy workflow) report traffic; dev and CI builds don't.
export function gaMeasurementId(
  value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
): string | undefined {
  if (!value) return undefined;
  // Fail the build rather than ship a tag that silently reports nowhere.
  if (!/^G-[A-Z0-9]+$/.test(value))
    throw new Error(`NEXT_PUBLIC_GA_MEASUREMENT_ID isn't a GA4 measurement ID: "${value}"`);
  return value;
}
