import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const windsorRockGym: ClimbingGym = {
  name: 'Windsor Rock Gym',
  website: 'https://windsorrockgym.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1215',
    streetName: 'Walker Rd',
    city: 'Windsor',
    region: 'ON',
    postalCode: 'N8Y 2N9',
    country: 'CA',
    latitude: 42.310,
    longitude: -83.000,
  },
  amenities: amenities('bouldering'),
};
