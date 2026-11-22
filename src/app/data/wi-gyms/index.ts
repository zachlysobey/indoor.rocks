import type { ClimbingGym } from "@/app/dataModel";
import { adventureRockBrookfield } from "./adventureRockBrookfield";
import { adventureRockMilwaukee } from "./adventureRockMilwaukee";
import { adventureRockWalkersPoint } from "./adventureRockWalkersPoint";
import { milwaukeeTurners } from "./milwaukeeTurners";
import { bouldersDowntown } from "./bouldersDowntown";
import { greaterHeights } from "./greaterHeights";
import { summitStrengthFitness } from "./summitStrengthFitness";
import { odysseyGreenBay } from "./odysseyGreenBay";
import { odysseyAppleton } from "./odysseyAppleton";
import { climbAtTheLoop } from "./climbAtTheLoop";

export const wiGyms: ClimbingGym[] = [
  adventureRockBrookfield,
  adventureRockMilwaukee,
  adventureRockWalkersPoint,
  milwaukeeTurners,
  bouldersDowntown,
  greaterHeights,
  summitStrengthFitness,
  odysseyGreenBay,
  odysseyAppleton,
  climbAtTheLoop,
];
