import type { ClimbingGym } from "@/app/dataModel";
import { steepworld } from "./steepworld";
import { spireMainFacility } from "./spireMainFacility";
import { spireTrainingCenter } from "./spireTrainingCenter";
import { freestoneClimbing } from "./freestoneClimbing";
import { stonetreeClimbing } from "./stonetreeClimbing";
import { hiLineClimbingCenter } from "./hiLineClimbingCenter";
import { rockfishClimbing } from "./rockfishClimbing";
import { recreateClimbing } from "./recreateClimbing";
import { firstAscentLibby } from "./firstAscentLibby";

export const mtGyms: ClimbingGym[] = [
  steepworld,
  spireMainFacility,
  spireTrainingCenter,
  freestoneClimbing,
  stonetreeClimbing,
  hiLineClimbingCenter,
  rockfishClimbing,
  recreateClimbing,
  firstAscentLibby,
];
