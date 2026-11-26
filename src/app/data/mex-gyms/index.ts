import type { ClimbingGym } from "@/app/dataModel";
import { adamantaSatelite } from "./adamantaSatelite";
import { amanecerClimbing } from "./amanecerClimbing";

export const mexGyms: ClimbingGym[] = [
  adamantaSatelite,
  amanecerClimbing,
];
