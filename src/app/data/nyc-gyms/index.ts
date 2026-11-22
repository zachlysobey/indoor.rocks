import type { ClimbingGym } from "@/app/dataModel";
import { boulderingProjectGowanus } from "./boulderingProjectGowanus";
import { movementGowanus } from "./movementGowanus";
import { vitalBrooklyn } from "./vitalBrooklyn";
import { metroRockBushwick } from "./metroRockBushwick";
import { gp81 } from "./gp81";
import { brooklynUprising } from "./brooklynUprising";
import { movementLic } from "./movementLic";
import { brooklynBouldersQueensbridge } from "./brooklynBouldersQueensbridge";
import { vitalLowerEastSide } from "./vitalLowerEastSide";
import { centralRockGymChelsea } from "./centralRockGymChelsea";
import { centralRockGymManhattan } from "./centralRockGymManhattan";
import { vitalUpperEastSide } from "./vitalUpperEastSide";
import { movementHarlem } from "./movementHarlem";
import { vitalWestHarlem } from "./vitalWestHarlem";

export const nycGyms: ClimbingGym[] = [
  boulderingProjectGowanus,
  movementGowanus,
  vitalBrooklyn,
  metroRockBushwick,
  gp81,
  brooklynUprising,
  movementLic,
  brooklynBouldersQueensbridge,
  vitalLowerEastSide,
  centralRockGymChelsea,
  centralRockGymManhattan,
  vitalUpperEastSide,
  movementHarlem,
  vitalWestHarlem,
];
