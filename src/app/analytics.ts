export function gaMeasurementId(value = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID): string | undefined {
  if (!value) return undefined;
  if (!/^G-[A-Z0-9]+$/.test(value))
    throw new Error(`Invalid GA4 measurement ID: "${value}"`);
  return value;
}
