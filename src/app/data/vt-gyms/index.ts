import type { ClimbingGym } from "@/app/dataModel";
import { petraCliffs } from "./petraCliffs";
import { metroRockVermont } from "./metroRockVermont";
import { greenMountainRockClimbingCenter } from "./greenMountainRockClimbingCenter";
import { brattCaveBoulderingGym } from "./brattCaveBoulderingGym";
import { climbStratton } from "./climbStratton";

export const vtGyms: ClimbingGym[] = [
  petraCliffs,
  metroRockVermont,
  greenMountainRockClimbingCenter,
  brattCaveBoulderingGym,
  climbStratton,
];
