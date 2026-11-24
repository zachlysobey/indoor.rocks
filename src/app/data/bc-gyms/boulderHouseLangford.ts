import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderHouse } from "../companies/boulderHouse";

export const boulderHouseLangford: ClimbingGym = {
  name: 'BoulderHouse Langford',
  website: 'https://boulderhouse.ca/langford/',
  description: "Bouldering only. Under-12s climb in TreeHouse, a kids' gym on the top floor.",
  parent: boulderHouse,
  address: {
    streetNumber: '1109',
    streetName: 'Langford Pkwy',
    city: 'Langford',
    region: 'BC',
    postalCode: 'V9B 0A5',
    country: 'CA',
    latitude: 48.449,
    longitude: -123.506,
  },
  amenities: amenities('bouldering'),
};
