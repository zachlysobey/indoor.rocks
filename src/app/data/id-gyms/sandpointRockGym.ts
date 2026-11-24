import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sandpointRockGym: ClimbingGym = {
  name: 'Sandpoint Rock Gym',
  description: 'Bouldering only. A volunteer-run nonprofit.',
  address: {
    streetNumber: '522',
    streetName: 'Oak St',
    city: 'Sandpoint',
    region: 'ID',
    postalCode: '83864',
    country: 'US',
    latitude: 48.274,
    longitude: -116.551,
  },
  amenities: amenities('bouldering'),
};
