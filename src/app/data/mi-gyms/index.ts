import type { ClimbingGym } from "@/app/dataModel";
import { planetRockAnnArbor } from "./planetRockAnnArbor";
import { planetRockMadisonHeights } from "./planetRockMadisonHeights";
import { planetRockGrandRapids } from "./planetRockGrandRapids";
import { dynoDetroit } from "./dynoDetroit";
import { terraFirmaGrandRapids } from "./terraFirmaGrandRapids";
import { terraFirmaEastLansing } from "./terraFirmaEastLansing";
import { higherGround } from "./higherGround";
import { insideMoves } from "./insideMoves";
import { scrapyardClimbing } from "./scrapyardClimbing";
import { shiftClimbing } from "./shiftClimbing";
import { climbKalamazoo } from "./climbKalamazoo";
import { elev8 } from "./elev8";

export const miGyms: ClimbingGym[] = [
  planetRockAnnArbor,
  planetRockMadisonHeights,
  planetRockGrandRapids,
  dynoDetroit,
  terraFirmaGrandRapids,
  terraFirmaEastLansing,
  higherGround,
  insideMoves,
  scrapyardClimbing,
  shiftClimbing,
  climbKalamazoo,
  elev8,
];
