import type { ClimbingGym } from "@/app/dataModel";
import { adamantaPuebla } from "./adamantaPuebla";
import { moonrockBoulder } from "./moonrockBoulder";

export const pueGyms: ClimbingGym[] = [
  adamantaPuebla,
  moonrockBoulder,
];
