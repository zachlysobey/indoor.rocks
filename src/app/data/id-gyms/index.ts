import type { ClimbingGym } from "@/app/dataModel";
import { commonsClimbingGym } from "./commonsClimbingGym";
import { verticalView } from "./verticalView";
import { coeurClimbing } from "./coeurClimbing";
import { gemstoneClimbing } from "./gemstoneClimbing";
import { rockGymRexburg } from "./rockGymRexburg";
import { tetonRockGym } from "./tetonRockGym";
import { sandpointRockGym } from "./sandpointRockGym";

export const idGyms: ClimbingGym[] = [
  commonsClimbingGym,
  verticalView,
  coeurClimbing,
  gemstoneClimbing,
  rockGymRexburg,
  tetonRockGym,
  sandpointRockGym,
];
