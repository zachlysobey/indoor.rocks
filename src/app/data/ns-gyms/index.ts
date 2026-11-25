import type { ClimbingGym } from "@/app/dataModel";
import { eastPeakClimbing } from "./eastPeakClimbing";
import { sevenBaysBayersLake } from "./sevenBaysBayersLake";
import { sevenBaysDartmouth } from "./sevenBaysDartmouth";
import { sevenBaysGottingen } from "./sevenBaysGottingen";

export const nsGyms: ClimbingGym[] = [
  eastPeakClimbing,
  sevenBaysBayersLake,
  sevenBaysDartmouth,
  sevenBaysGottingen,
];
