import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockvilleClimbingCenter: ClimbingGym = {
  name: 'Rockville Climbing Center',
  website: 'https://www.rockvilleclimbing.com/',
  address: {
    streetNumber: '200',
    streetName: 'Whitehead Rd',
    city: 'Hamilton',
    region: 'NJ',
    postalCode: '08619',
    country: 'US',
    latitude: 40.240,
    longitude: -74.727,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
