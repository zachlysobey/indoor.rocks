import type { GymAmenity } from "../dataModel";
import { amenityMap, type AmenityName } from "./amenityMap";

// Keep the concise amenities("bouldering", "lead") API in each gym's data file.
export const amenities = (...names: AmenityName[]): GymAmenity[] =>
  names.map(name => ({ name, ...amenityMap[name] }));
