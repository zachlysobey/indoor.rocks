import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bigIslandBouldering: ClimbingGym = {
  name: 'Big Island Bouldering',
  description: 'Bouldering only.',
  address: {
    streetNumber: '161',
    streetName: 'Cheshire Ln N',
    city: 'Plymouth',
    state: 'MN',
    postalCode: '55441',
    country: 'USA',
    latitude: 44.987,
    longitude: -93.460,
  },
  amenities: amenities('bouldering'),
};
