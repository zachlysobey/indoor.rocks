import type { ClimbingGym } from "@/app/dataModel";
import { adamantaDelValle } from "./adamantaDelValle";
import { adamantaEscandon } from "./adamantaEscandon";
import { adamantaSantaFe } from "./adamantaSantaFe";
import { axoClimb } from "./axoClimb";
import { rockSolidCoyoacan } from "./rockSolidCoyoacan";
import { tokaClimbing } from "./tokaClimbing";
import { vPlusBouldering } from "./vPlusBouldering";

export const cmxGyms: ClimbingGym[] = [
  adamantaDelValle,
  adamantaEscandon,
  adamantaSantaFe,
  axoClimb,
  rockSolidCoyoacan,
  tokaClimbing,
  vPlusBouldering,
];
