import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const aestheticClimbingGym: ClimbingGym = {
  name: 'Aesthetic Climbing Gym',
  website: 'https://www.aestheticclimbinggym.com/',
  description: 'Bouldering gym.',
  address: {
    streetNumber: '26794',
    streetName: 'Vista Terrace',
    city: 'Lake Forest',
    state: 'CA',
    postalCode: '92630',
    country: 'USA',
    latitude: 33.634,
    longitude: -117.716,
  },
  amenities: amenities('bouldering'),
};
