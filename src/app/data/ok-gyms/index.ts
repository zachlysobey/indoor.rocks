import type { ClimbingGym } from "@/app/dataModel";
import { blocworksEdmond } from "./blocworksEdmond";
import { blocworksMidtown } from "./blocworksMidtown";
import { thresholdClimbing } from "./thresholdClimbing";
import { highPlainsClimbing } from "./highPlainsClimbing";
import { stratusClimbing } from "./stratusClimbing";
import { climbTulsa } from "./climbTulsa";
import { gravityBear } from "./gravityBear";

export const okGyms: ClimbingGym[] = [
  blocworksEdmond,
  blocworksMidtown,
  thresholdClimbing,
  highPlainsClimbing,
  stratusClimbing,
  climbTulsa,
  gravityBear,
];
