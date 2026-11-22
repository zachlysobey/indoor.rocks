import type { ClimbingGym } from "@/app/dataModel";
import { fargoClimbing } from "./fargoClimbing";
import { northernHeightsRockGym } from "./northernHeightsRockGym";

export const ndGyms: ClimbingGym[] = [
  fargoClimbing,
  northernHeightsRockGym,
];
