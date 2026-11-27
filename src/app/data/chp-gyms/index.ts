import type { ClimbingGym } from "@/app/dataModel";
import { inerciaSalaDeEscalada } from "./inerciaSalaDeEscalada";
import { skalaBoulderGym } from "./skalaBoulderGym";

export const chpGyms: ClimbingGym[] = [
  inerciaSalaDeEscalada,
  skalaBoulderGym,
];
