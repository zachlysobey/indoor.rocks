import type { ClimbingGym } from "@/app/dataModel";
import { nhClimbingAndFitness } from "./nhClimbingAndFitness";
import { verticalDreams } from "./verticalDreams";
import { indoorAscent } from "./indoorAscent";
import { theNotchClimbingGym } from "./theNotchClimbingGym";
import { northCountryClimbingCenter } from "./northCountryClimbingCenter";
import { saltPumpPortsmouth } from "./saltPumpPortsmouth";
import { seacoastClimb } from "./seacoastClimb";
import { climbMonadnock } from "./climbMonadnock";

export const nhGyms: ClimbingGym[] = [
  nhClimbingAndFitness,
  verticalDreams,
  indoorAscent,
  theNotchClimbingGym,
  northCountryClimbingCenter,
  saltPumpPortsmouth,
  seacoastClimb,
  climbMonadnock,
];
