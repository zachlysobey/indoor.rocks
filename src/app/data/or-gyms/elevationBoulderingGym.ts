import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const elevationBoulderingGym: ClimbingGym = {
  name: 'Elevation Bouldering Gym',
  website: 'https://www.elevationgym.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '348',
    streetName: 'Lincoln St',
    city: 'Eugene',
    state: 'OR',
    postalCode: '97401',
    country: 'USA',
    latitude: 44.055,
    longitude: -123.099,
  },
  amenities: amenities('bouldering'),
};
