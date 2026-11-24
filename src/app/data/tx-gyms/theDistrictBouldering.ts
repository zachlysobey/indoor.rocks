import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theDistrictBouldering: ClimbingGym = {
  name: 'The District Bouldering',
  website: 'https://www.thedistrictsa.com/',
  description: 'Bouldering gym with 24/7 member access.',
  address: {
    streetNumber: '2424',
    streetName: 'Broadway St',
    city: 'San Antonio',
    region: 'TX',
    postalCode: '78215',
    country: 'US',
    latitude: 29.449,
    longitude: -98.474,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
