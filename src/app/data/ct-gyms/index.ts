import type { ClimbingGym } from "@/app/dataModel";
import { rockClimbFairfield } from "./rockClimbFairfield";
import { cityClimbGym } from "./cityClimbGym";
import { rockSpotClimbingWallingford } from "./rockSpotClimbingWallingford";
import { centralRockGymWestHartford } from "./centralRockGymWestHartford";
import { centralRockGymGlastonbury } from "./centralRockGymGlastonbury";
import { stoneAgeRockGym } from "./stoneAgeRockGym";
import { rockSpotClimbingNewHaven } from "./rockSpotClimbingNewHaven";
import { ascentNewHaven } from "./ascentNewHaven";

export const ctGyms: ClimbingGym[] = [
  rockClimbFairfield,
  cityClimbGym,
  rockSpotClimbingWallingford,
  centralRockGymWestHartford,
  centralRockGymGlastonbury,
  stoneAgeRockGym,
  rockSpotClimbingNewHaven,
  ascentNewHaven,
];
