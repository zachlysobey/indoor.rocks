import type { ClimbingGym } from "@/app/dataModel";
import { adamantaGonzalitos } from "./adamantaGonzalitos";
import { adamantaSierra } from "./adamantaSierra";
import { deltaClimbing } from "./deltaClimbing";
import { madComplex } from "./madComplex";
import { picoNorteSanPedro } from "./picoNorteSanPedro";
import { picoNorteZonaTec } from "./picoNorteZonaTec";

export const nleGyms: ClimbingGym[] = [
  adamantaGonzalitos,
  adamantaSierra,
  deltaClimbing,
  madComplex,
  picoNorteSanPedro,
  picoNorteZonaTec,
];
