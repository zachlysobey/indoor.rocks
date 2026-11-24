import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderHouse } from "../companies/boulderHouse";

export const boulderHouseLangford: ClimbingGym = {
  name: 'BoulderHouse Langford',
  description: "Bouldering only, with a kids' wall.",
  parent: boulderHouse,
  address: {
    streetNumber: '1109',
    streetName: 'Langford Pkwy',
    city: 'Langford',
    state: 'BC',
    postalCode: 'V9B',
    country: 'Canada',
    latitude: 48.449,
    longitude: -123.506,
  },
  amenities: amenities('bouldering'),
};
