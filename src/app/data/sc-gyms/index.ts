import type { ClimbingGym } from "@/app/dataModel";
import { blocHaven } from "./blocHaven";
import { climbAtBlueRidge } from "./climbAtBlueRidge";
import { coastalClimbing } from "./coastalClimbing";
import { capitalClimbing } from "./capitalClimbing";
import { projectRockEasley } from "./projectRockEasley";
import { trailheadClimbing } from "./trailheadClimbing";

export const scGyms: ClimbingGym[] = [
  blocHaven,
  climbAtBlueRidge,
  coastalClimbing,
  capitalClimbing,
  projectRockEasley,
  trailheadClimbing,
];
