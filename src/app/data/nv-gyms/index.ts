import type { ClimbingGym } from "@/app/dataModel";
import { refugeClimbing } from "./refugeClimbing";
import { redRockClimbingCenter } from "./redRockClimbingCenter";
import { nevadaClimbingCenter } from "./nevadaClimbingCenter";
import { mesaRimReno } from "./mesaRimReno";
import { basecampReno } from "./basecampReno";
import { northPeakClimbing } from "./northPeakClimbing";
import { theBlockClimbing } from "./theBlockClimbing";

export const nvGyms: ClimbingGym[] = [
  refugeClimbing,
  redRockClimbingCenter,
  nevadaClimbingCenter,
  mesaRimReno,
  basecampReno,
  northPeakClimbing,
  theBlockClimbing,
];
