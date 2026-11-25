import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boulderParc: ClimbingGym = {
  name: 'Boulder Parc',
  website: 'https://boulderparc.com',
  description: 'Bouldering, with a café.',
  address: {
    streetNumber: '1415',
    streetName: 'Morningside Ave',
    city: 'Scarborough',
    region: 'ON',
    postalCode: 'M1B 3J1',
    country: 'CA',
    latitude: 43.807,
    longitude: -79.218,
  },
  amenities: amenities('bouldering', 'yoga'),
};
