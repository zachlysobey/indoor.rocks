import type { ClimbingGym } from "@/app/dataModel";
import { highPointBirmingham } from "./highPointBirmingham";
import { highPointMidcity } from "./highPointMidcity";
import { highPointLincolnMill } from "./highPointLincolnMill";

export const alGyms: ClimbingGym[] = [
  highPointBirmingham,
  highPointMidcity,
  highPointLincolnMill,
];
