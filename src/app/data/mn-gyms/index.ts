import type { ClimbingGym } from "@/app/dataModel";
import { verticalEndeavorsMinneapolis } from "./verticalEndeavorsMinneapolis";
import { verticalEndeavorsBloomington } from "./verticalEndeavorsBloomington";
import { verticalEndeavorsStPaul } from "./verticalEndeavorsStPaul";
import { verticalEndeavorsTwinCitiesBouldering } from "./verticalEndeavorsTwinCitiesBouldering";
import { verticalEndeavorsDuluth } from "./verticalEndeavorsDuluth";
import { boulderingProjectMinneapolis } from "./boulderingProjectMinneapolis";
import { boulderingProjectStPaul } from "./boulderingProjectStPaul";
import { minnesotaClimbingCooperative } from "./minnesotaClimbingCooperative";
import { bigIslandBouldering } from "./bigIslandBouldering";
import { duluthClimbingCoop } from "./duluthClimbingCoop";
import { rocaClimbing } from "./rocaClimbing";

export const mnGyms: ClimbingGym[] = [
  verticalEndeavorsMinneapolis,
  verticalEndeavorsBloomington,
  verticalEndeavorsStPaul,
  verticalEndeavorsTwinCitiesBouldering,
  verticalEndeavorsDuluth,
  boulderingProjectMinneapolis,
  boulderingProjectStPaul,
  minnesotaClimbingCooperative,
  bigIslandBouldering,
  duluthClimbingCoop,
  rocaClimbing,
];
