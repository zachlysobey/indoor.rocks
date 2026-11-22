import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const valleyRockGym: ClimbingGym = {
  name: 'Valley Rock Gym',
  website: 'https://www.valleyrockgym.com/',
  address: {
    streetNumber: '401',
    streetName: 'SW Jefferson Ave',
    city: 'Corvallis',
    state: 'OR',
    postalCode: '97333',
    country: 'USA',
    latitude: 44.563,
    longitude: -123.262,
  },
  amenities: amenities('bouldering', 'yoga'),
};
