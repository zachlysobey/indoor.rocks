import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const northMassBoulder: ClimbingGym = {
  name: 'North Mass Boulder',
  website: 'https://northmassboulder.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1411',
    streetName: 'Roosevelt Ave',
    city: 'Indianapolis',
    region: 'IN',
    postalCode: '46201',
    country: 'US',
    latitude: 39.786,
    longitude: -86.140,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
