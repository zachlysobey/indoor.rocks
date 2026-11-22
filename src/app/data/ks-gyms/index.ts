import type { ClimbingGym } from "@/app/dataModel";
import { rokcOlathe } from "./rokcOlathe";
import { rendezvousClimbingGym } from "./rendezvousClimbingGym";
import { climbLawrence } from "./climbLawrence";
import { blissClimbingAndFitness } from "./blissClimbingAndFitness";

export const ksGyms: ClimbingGym[] = [
  rokcOlathe,
  rendezvousClimbingGym,
  climbLawrence,
  blissClimbingAndFitness,
];
