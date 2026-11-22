import type { ClimbingGym } from "@/app/dataModel";
import { newOrleansBoulderLounge } from "./newOrleansBoulderLounge";
import { uptownClimbing } from "./uptownClimbing";
import { southernStone } from "./southernStone";
import { risenRock } from "./risenRock";

export const laGyms: ClimbingGym[] = [
  newOrleansBoulderLounge,
  uptownClimbing,
  southernStone,
  risenRock,
];
