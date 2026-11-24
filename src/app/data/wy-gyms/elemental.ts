import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const elemental: ClimbingGym = {
  name: 'Elemental Performance + Fitness',
  website: 'https://lmntl.net',
  description: 'A fitness gym with a bouldering-focused climbing gym.',
  address: {
    streetNumber: '134',
    streetName: 'Lincoln St',
    city: 'Lander',
    region: 'WY',
    postalCode: '82520',
    country: 'US',
    latitude: 42.834,
    longitude: -108.730,
  },
  amenities: amenities('bouldering'),
};
