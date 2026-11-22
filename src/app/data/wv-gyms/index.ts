import type { ClimbingGym } from "@/app/dataModel";
import { grippedFitness } from "./grippedFitness";
import { energyRockGym } from "./energyRockGym";
import { climbingNewHeights } from "./climbingNewHeights";
import { outsideInClimbingGym } from "./outsideInClimbingGym";

export const wvGyms: ClimbingGym[] = [
  grippedFitness,
  energyRockGym,
  climbingNewHeights,
  outsideInClimbingGym,
];
