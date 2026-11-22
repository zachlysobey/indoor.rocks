import type { ClimbingGym } from "@/app/dataModel";
import { frontierClimbing } from "./frontierClimbing";
import { blackHillsBasecamp } from "./blackHillsBasecamp";
import { climberz } from "./climberz";

export const sdGyms: ClimbingGym[] = [
  frontierClimbing,
  blackHillsBasecamp,
  climberz,
];
