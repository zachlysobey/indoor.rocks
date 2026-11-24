import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theProvingGroundBoulderingGym: ClimbingGym = {
  name: 'The Proving Ground Bouldering Gym',
  website: 'https://tpgbouldering.com/',
  description: 'Bouldering gym.',
  address: {
    streetNumber: '1701',
    streetName: 'E Empire St',
    city: 'Bloomington',
    region: 'IL',
    postalCode: '61704',
    country: 'US',
    latitude: 40.491,
    longitude: -88.960,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
