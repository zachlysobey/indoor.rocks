import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const insideMoves: ClimbingGym = {
  name: 'Inside Moves',
  address: {
    streetNumber: '639',
    streetName: '76th St SW',
    city: 'Byron Center',
    region: 'MI',
    postalCode: '49315',
    country: 'US',
    latitude: 42.827,
    longitude: -85.680,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
