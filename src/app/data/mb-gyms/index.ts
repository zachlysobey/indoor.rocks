import type { ClimbingGym } from "@/app/dataModel";
import { theHiveWinnipeg } from "./theHiveWinnipeg";
import { verticalAdventuresWinnipeg } from "./verticalAdventuresWinnipeg";

export const mbGyms: ClimbingGym[] = [
  theHiveWinnipeg,
  verticalAdventuresWinnipeg,
];
