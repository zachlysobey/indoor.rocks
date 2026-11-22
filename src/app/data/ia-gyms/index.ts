import type { ClimbingGym } from "@/app/dataModel";
import { climbIowaGrimes } from "./climbIowaGrimes";
import { climbIowaEastVillage } from "./climbIowaEastVillage";
import { bluestemBoulders } from "./bluestemBoulders";

export const iaGyms: ClimbingGym[] = [
  climbIowaGrimes,
  climbIowaEastVillage,
  bluestemBoulders,
];
