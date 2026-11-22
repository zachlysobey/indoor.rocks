import type { ClimbingGym } from "@/app/dataModel";
import { mwClimbingLincoln } from "./mwClimbingLincoln";
import { mwClimbingOmaha } from "./mwClimbingOmaha";
import { approachClimbingGym } from "./approachClimbingGym";

export const neGyms: ClimbingGym[] = [
  mwClimbingLincoln,
  mwClimbingOmaha,
  approachClimbingGym,
];
