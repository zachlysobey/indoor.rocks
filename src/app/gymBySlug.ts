import type { ClimbingGym } from "./dataModel";
import { getData } from "./getData";
import { gymSlug } from "./gymSlug";

// The gym a slug (from a URL) names, if any.
export const gymBySlug = (slug: string): ClimbingGym | undefined =>
  getData().climbingGyms.find(gym => gymSlug(gym) === slug);
