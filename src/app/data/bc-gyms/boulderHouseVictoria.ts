import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderHouse } from "../companies/boulderHouse";

export const boulderHouseVictoria: ClimbingGym = {
  name: 'BoulderHouse Victoria',
  website: 'https://boulderhouse.ca/victoria/',
  description: 'Bouldering only.',
  parent: boulderHouse,
  address: {
    streetNumber: '2829',
    streetName: 'Quesnel St',
    city: 'Victoria',
    state: 'BC',
    postalCode: 'V8T 4K2',
    country: 'Canada',
    latitude: 48.443,
    longitude: -123.360,
  },
  amenities: amenities('bouldering'),
};
