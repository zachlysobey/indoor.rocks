import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockGymRexburg: ClimbingGym = {
  name: 'The Rock Gym - Rexburg',
  description: 'Formerly Regional Rock Walls.',
  address: {
    streetNumber: '871',
    streetName: 'Jet Stream Dr',
    city: 'Rexburg',
    state: 'ID',
    postalCode: '83440',
    country: 'USA',
    latitude: 43.833,
    longitude: -111.805,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
