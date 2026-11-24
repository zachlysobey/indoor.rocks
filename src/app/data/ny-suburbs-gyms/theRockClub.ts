import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theRockClub: ClimbingGym = {
  name: 'The Rock Club',
  website: 'https://pinebrookfitness.com/',
  description: 'Inside the Pine Brook Fitness building.',
  address: {
    streetNumber: '130',
    streetName: 'Rhodes St',
    city: 'New Rochelle',
    region: 'NY',
    postalCode: '10801',
    country: 'US',
    latitude: 40.91764,
    longitude: -73.77682,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
