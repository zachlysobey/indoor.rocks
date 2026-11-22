// Shared metadata for each known gym amenity. The keys are the stable data identifiers.
export const amenityMap = {
  "free-weights": { label: "Free weights" },
  machines: { label: "Machines" },
  bouldering: { label: "Bouldering" },
  "auto-belays": { label: "Auto-belays" },
  "top-rope": { label: "Top rope" },
  lead: { label: "Lead climbing" },
  sauna: { label: "Sauna" },
  yoga: { label: "Yoga" },
  "aerial-silks": { label: "Aerial silks" },
} as const;

export type AmenityName = keyof typeof amenityMap;
