import type { ClimbingGym } from "@/app/dataModel";
import { hiClimb } from "./hiClimb";
import { volcanicRockGym } from "./volcanicRockGym";
import { oahuBoulderingGym } from "./oahuBoulderingGym";
import { alohaRockGym } from "./alohaRockGym";
import { bigIslandClimbing } from "./bigIslandClimbing";
import { konaCliffs } from "./konaCliffs";

export const hiGyms: ClimbingGym[] = [
  hiClimb,
  volcanicRockGym,
  oahuBoulderingGym,
  alohaRockGym,
  bigIslandClimbing,
  konaCliffs,
];
