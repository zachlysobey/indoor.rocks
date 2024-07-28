import { ClimbingGym, DataModel, GymAmenity } from "./dataModel";
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getData(): DataModel {
  const data: DataModel = {
    climbingGyms: Object.values(climbingGymDictionary),
  };
  return data;
}

const amenityMap: Record<GymAmenity["name"], GymAmenity> = {
  "free-weights": { name: "free-weights" },
  machines: { name: "machines" },
  bouldering: { name: "bouldering" },
  "auto-belays": { name: "auto-belays" },
  "top-rope": { name: "top-rope" },
  sauna: { name: "sauna" },
  yoga: { name: "yoga" },
  "arial-silks": { name: "arial-silks" },
};

const climbingGymDictionary: Record<string, ClimbingGym> = {
  vitalBrooklyn: {
    name: "Vital Brooklyn",
    address: {
      state: "NY",
      streetNumber: "221",
      streetName: "N 14th St",
      city: "Brooklyn",
      postalCode: "11249",
      country: "USA",
    },
    amenities: [
      amenityMap["bouldering"],
      amenityMap["machines"],
      amenityMap["free-weights"],
      amenityMap["yoga"],
      amenityMap["sauna"],
      amenityMap["auto-belays"],
    ],
  },
  brooklynBoulders: {
    name: "Brooklyn Boulders",
    address: {
      state: "NY",
      streetNumber: "575",
      streetName: "Degraw St",
      city: "Brooklyn",
      postalCode: "11217",
      country: "USA",
    },
    amenities: [
      amenityMap["bouldering"],
      amenityMap["top-rope"],
      amenityMap["machines"],
      amenityMap["free-weights"],
      amenityMap["yoga"],
      amenityMap["sauna"],
    ],
  },
  theCliffsLIC: {
    name: "The Cliffs at LIC",
    address: {
      state: "NY",
      streetNumber: "11-11",
      streetName: "44th Dr",
      city: "Long Island City",
      postalCode: "11101",
      country: "USA",
    },
    amenities: [
      amenityMap["bouldering"],
      amenityMap["top-rope"],
      amenityMap["auto-belays"],
      amenityMap["machines"],
      amenityMap["free-weights"],
      amenityMap["yoga"],
    ],
  },
  metroRockBrooklyn: {
    name: "MetroRock Brooklyn",
    address: {
      state: "NY",
      streetNumber: "321",
      streetName: "Douglass St",
      city: "Brooklyn",
      postalCode: "11217",
      country: "USA",
    },
    amenities: [
      amenityMap["bouldering"],
      amenityMap["top-rope"],
      amenityMap["auto-belays"],
      amenityMap["machines"],
      amenityMap["free-weights"],
    ],
  },
};
