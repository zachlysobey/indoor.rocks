import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const halfMoonBouldering: ClimbingGym = {
  name: 'Half Moon Bouldering',
  website: 'https://www.halfmoonbouldering.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '124',
    streetName: 'N 85th St',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98103',
    country: 'USA',
    latitude: 47.690,
    longitude: -122.357,
  },
  amenities: amenities('bouldering', 'yoga'),
};
