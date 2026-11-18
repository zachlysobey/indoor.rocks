import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockvilleClimbingCenter: ClimbingGym = {
  name: 'Rockville Climbing Center',
  website: 'https://www.rockvilleclimbing.com/',
  address: {
    streetNumber: '200',
    streetName: 'Whitehead Rd',
    city: 'Hamilton',
    state: 'NJ',
    postalCode: '08619',
    country: 'USA',
    latitude: 40.240,
    longitude: -74.727,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
