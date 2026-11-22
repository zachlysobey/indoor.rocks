import type { ClimbingGym } from "@/app/dataModel";
import { stoneAgeMidtown } from "./stoneAgeMidtown";
import { stoneAgeNorth } from "./stoneAgeNorth";
import { santaFeClimbingCenter } from "./santaFeClimbingCenter";

export const nmGyms: ClimbingGym[] = [
  stoneAgeMidtown,
  stoneAgeNorth,
  santaFeClimbingCenter,
];
