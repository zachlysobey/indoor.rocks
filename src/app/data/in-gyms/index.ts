import type { ClimbingGym } from "@/app/dataModel";
import { hoosierHeightsBloomington } from "./hoosierHeightsBloomington";
import { hoosierHeightsIndianapolis } from "./hoosierHeightsIndianapolis";
import { northMassBoulder } from "./northMassBoulder";
import { climbTimeIndy } from "./climbTimeIndy";
import { epicClimbing } from "./epicClimbing";
import { verticalExcapeEvansville } from "./verticalExcapeEvansville";
import { summitCityClimbing } from "./summitCityClimbing";
import { columbusRocks } from "./columbusRocks";

export const inGyms: ClimbingGym[] = [
  hoosierHeightsBloomington,
  hoosierHeightsIndianapolis,
  northMassBoulder,
  climbTimeIndy,
  epicClimbing,
  verticalExcapeEvansville,
  summitCityClimbing,
  columbusRocks,
];
