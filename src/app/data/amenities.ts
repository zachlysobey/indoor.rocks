import type { GymAmenity } from "../dataModel";
import { amenityMap } from "./amenityMap";

export const amenities = (...names: GymAmenity['name'][]): GymAmenity[] =>
  names.map(name => amenityMap[name]);
