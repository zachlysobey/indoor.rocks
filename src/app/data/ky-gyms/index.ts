import type { ClimbingGym } from "@/app/dataModel";
import { lefClimbing } from "./lefClimbing";
import { climbNulu } from "./climbNulu";
import { rocksportLouisville } from "./rocksportLouisville";
import { rockGem } from "./rockGem";
import { verticalExcapeBowlingGreen } from "./verticalExcapeBowlingGreen";

export const kyGyms: ClimbingGym[] = [
  lefClimbing,
  climbNulu,
  rocksportLouisville,
  rockGem,
  verticalExcapeBowlingGreen,
];
