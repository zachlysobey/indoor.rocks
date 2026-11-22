import type { ClimbingGym } from "@/app/dataModel";
import { movementHampden } from "./movementHampden";
import { movementColumbia } from "./movementColumbia";
import { movementRockville } from "./movementRockville";
import { movementTimonium } from "./movementTimonium";
import { sportrockRio } from "./sportrockRio";
import { theBoulderYard } from "./theBoulderYard";

export const mdGyms: ClimbingGym[] = [
  movementHampden,
  movementColumbia,
  movementRockville,
  movementTimonium,
  sportrockRio,
  theBoulderYard,
];
