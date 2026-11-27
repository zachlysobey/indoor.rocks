import type { ClimbingGym } from "@/app/dataModel";
import { ohMyGoat } from "./ohMyGoat";
import { rocksGym } from "./rocksGym";

export const queGyms: ClimbingGym[] = [
  ohMyGoat,
  rocksGym,
];
