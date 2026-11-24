import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { blocworks } from "../companies/blocworks";

export const blocworksMidtown: ClimbingGym = {
  name: 'Blocworks Midtown',
  parent: blocworks,
  website: 'https://climbblocworks.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1210',
    streetName: 'N Hudson Ave',
    city: 'Oklahoma City',
    region: 'OK',
    postalCode: '73103',
    country: 'US',
    latitude: 35.481,
    longitude: -97.519,
  },
  amenities: amenities('bouldering'),
};
