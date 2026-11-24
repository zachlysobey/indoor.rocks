import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const greenMountainRockClimbingCenter: ClimbingGym = {
  name: 'Green Mountain Rock Climbing Center',
  website: 'https://www.vermontclimbing.com/',
  description: 'Also runs guided outdoor climbing.',
  address: {
    streetNumber: '223',
    streetName: 'Woodstock Ave',
    city: 'Rutland',
    region: 'VT',
    postalCode: '05701',
    country: 'US',
    latitude: 43.620,
    longitude: -72.956,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
