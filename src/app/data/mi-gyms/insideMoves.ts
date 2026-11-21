import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const insideMoves: ClimbingGym = {
  name: 'Inside Moves',
  address: {
    streetNumber: '639',
    streetName: '76th St SW',
    city: 'Byron Center',
    state: 'MI',
    postalCode: '49315',
    country: 'USA',
    latitude: 42.827,
    longitude: -85.680,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
