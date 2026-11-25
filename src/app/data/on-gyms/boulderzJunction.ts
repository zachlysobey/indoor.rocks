import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderz } from "../companies/boulderz";

export const boulderzJunction: ClimbingGym = {
  name: 'Boulderz Junction',
  parent: boulderz,
  address: {
    streetNumber: '1444',
    streetName: 'Dupont St, Unit 16',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M6P 4H3',
    country: 'CA',
    latitude: 43.666,
    longitude: -79.453,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights'),
};
