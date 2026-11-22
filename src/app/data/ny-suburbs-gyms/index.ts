import type { ClimbingGym } from "@/app/dataModel";
import { movementValhalla } from "./movementValhalla";
import { theRockClub } from "./theRockClub";
import { rocksteadyClimbingGym } from "./rocksteadyClimbingGym";
import { islandRock } from "./islandRock";
import { theGravityVaultWestbury } from "./theGravityVaultWestbury";
import { theGravityVaultMelville } from "./theGravityVaultMelville";

export const nySuburbsGyms: ClimbingGym[] = [
  movementValhalla,
  theRockClub,
  rocksteadyClimbingGym,
  islandRock,
  theGravityVaultWestbury,
  theGravityVaultMelville,
];
