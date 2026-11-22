import type { ClimbingGym } from "@/app/dataModel";
import { rockSpotClimbingLincoln } from "./rockSpotClimbingLincoln";
import { rockSpotClimbingPeaceDale } from "./rockSpotClimbingPeaceDale";
import { rockSpotClimbingProvidence } from "./rockSpotClimbingProvidence";
import { centralRockGymWarwick } from "./centralRockGymWarwick";

export const riGyms: ClimbingGym[] = [
  rockSpotClimbingLincoln,
  rockSpotClimbingPeaceDale,
  rockSpotClimbingProvidence,
  centralRockGymWarwick,
];
