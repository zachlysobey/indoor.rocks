import type { ClimbingGym } from "@/app/dataModel";
import { centralRockGymAtlanta } from "./centralRockGymAtlanta";
import { centralRockGymAtlantaBouldering } from "./centralRockGymAtlantaBouldering";
import { centralRockGymKennesaw } from "./centralRockGymKennesaw";
import { centralRockGymMidtown } from "./centralRockGymMidtown";
import { wallCrawlerRockClub } from "./wallCrawlerRockClub";
import { theOverlook } from "./theOverlook";
import { adrenalineClimbing } from "./adrenalineClimbing";
import { escaladeKennesaw } from "./escaladeKennesaw";
import { activeClimbingAthens } from "./activeClimbingAthens";
import { activeClimbingAugusta } from "./activeClimbingAugusta";
import { maconRocks } from "./maconRocks";
import { brunswickRocks } from "./brunswickRocks";

export const gaGyms: ClimbingGym[] = [
  centralRockGymAtlanta,
  centralRockGymAtlantaBouldering,
  centralRockGymKennesaw,
  centralRockGymMidtown,
  wallCrawlerRockClub,
  theOverlook,
  adrenalineClimbing,
  escaladeKennesaw,
  activeClimbingAthens,
  activeClimbingAugusta,
  maconRocks,
  brunswickRocks,
];
