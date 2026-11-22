import type { ClimbingGym } from "@/app/dataModel";
import { climbSoIllPowerPlant } from "./climbSoIllPowerPlant";
import { climbSoIllSteelShop } from "./climbSoIllSteelShop";
import { upperLimitsMarylandHeights } from "./upperLimitsMarylandHeights";
import { upperLimitsChesterfield } from "./upperLimitsChesterfield";
import { comoRocks } from "./comoRocks";
import { theBoulderingGardenColumbia } from "./theBoulderingGardenColumbia";
import { zenithClimbingCenter } from "./zenithClimbingCenter";
import { ibexClimbingGym } from "./ibexClimbingGym";
import { rokcNorth } from "./rokcNorth";
import { sequenceClimbing } from "./sequenceClimbing";

export const moGyms: ClimbingGym[] = [
  climbSoIllPowerPlant,
  climbSoIllSteelShop,
  upperLimitsMarylandHeights,
  upperLimitsChesterfield,
  comoRocks,
  theBoulderingGardenColumbia,
  zenithClimbingCenter,
  ibexClimbingGym,
  rokcNorth,
  sequenceClimbing,
];
