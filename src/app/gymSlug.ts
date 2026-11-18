import type { ClimbingGym } from "./dataModel";

// The URL-safe id for a gym, used as ?gym=<slug>: "The Gravity Vault Hoboken" → "the-gravity-vault-hoboken".
export const gymSlug = (gym: ClimbingGym): string =>
  gym.name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
