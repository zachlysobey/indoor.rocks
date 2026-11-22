import type { ClimbingGym } from "@/app/dataModel";
import { climbBentonville } from "./climbBentonville";
import { climbConway } from "./climbConway";
import { littleRockClimbingCenter } from "./littleRockClimbingCenter";
import { bouldersAndBrews } from "./bouldersAndBrews";
import { ozarkClimbingGym } from "./ozarkClimbingGym";
import { verticalHorizons } from "./verticalHorizons";

export const arGyms: ClimbingGym[] = [
  climbBentonville,
  climbConway,
  littleRockClimbingCenter,
  bouldersAndBrews,
  ozarkClimbingGym,
  verticalHorizons,
];
