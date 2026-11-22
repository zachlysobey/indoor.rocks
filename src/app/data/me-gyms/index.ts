import type { ClimbingGym } from "@/app/dataModel";
import { saltPumpScarborough } from "./saltPumpScarborough";
import { evoRockAndFitnessPortland } from "./evoRockAndFitnessPortland";
import { voltaClimbing } from "./voltaClimbing";

export const meGyms: ClimbingGym[] = [
  saltPumpScarborough,
  evoRockAndFitnessPortland,
  voltaClimbing,
];
