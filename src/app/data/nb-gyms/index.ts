import type { ClimbingGym } from "@/app/dataModel";
import { fitRocksMoncton } from "./fitRocksMoncton";
import { fitRocksSaintJohn } from "./fitRocksSaintJohn";
import { frederictonBoulderingCoop } from "./frederictonBoulderingCoop";

export const nbGyms: ClimbingGym[] = [
  fitRocksMoncton,
  fitRocksSaintJohn,
  frederictonBoulderingCoop,
];
