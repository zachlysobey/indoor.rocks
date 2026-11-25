import type { ClimbingGym } from "@/app/dataModel";
import { gripItCaswell } from "./gripItCaswell";
import { gripItNelson } from "./gripItNelson";
import { reginaClimbingCentre } from "./reginaClimbingCentre";

export const skGyms: ClimbingGym[] = [
  gripItCaswell,
  gripItNelson,
  reginaClimbingCentre,
];
