import type { ClimbingGym } from "@/app/dataModel";
import { ameyalli } from "./ameyalli";
import { motionBoulderAviacion } from "./motionBoulderAviacion";
import { motionBoulderBugambilias } from "./motionBoulderBugambilias";
import { motionBoulderJavierMina } from "./motionBoulderJavierMina";
import { summitEscalada } from "./summitEscalada";
import { yeEscaladaYogaCenter } from "./yeEscaladaYogaCenter";

export const jalGyms: ClimbingGym[] = [
  ameyalli,
  motionBoulderAviacion,
  motionBoulderBugambilias,
  motionBoulderJavierMina,
  summitEscalada,
  yeEscaladaYogaCenter,
];
