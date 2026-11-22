import type { ClimbingGym } from "@/app/dataModel";
import { alaskaRockGym } from "./alaskaRockGym";
import { ascensionRockClub } from "./ascensionRockClub";
import { rockDump } from "./rockDump";

export const akGyms: ClimbingGym[] = [
  alaskaRockGym,
  ascensionRockClub,
  rockDump,
];
