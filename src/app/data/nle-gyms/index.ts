import type { ClimbingGym } from "@/app/dataModel";
import { adamantaGonzalitos } from "./adamantaGonzalitos";
import { adamantaSierra } from "./adamantaSierra";
import { deltaClimbing } from "./deltaClimbing";
import { madComplex } from "./madComplex";
import { picoNorteNuevoSur } from "./picoNorteNuevoSur";
import { picoNorteSanPedro } from "./picoNorteSanPedro";

export const nleGyms: ClimbingGym[] = [
  adamantaGonzalitos,
  adamantaSierra,
  deltaClimbing,
  madComplex,
  picoNorteNuevoSur,
  picoNorteSanPedro,
];
