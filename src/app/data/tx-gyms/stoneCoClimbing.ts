import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const stoneCoClimbing: ClimbingGym = {
  name: 'Stone Co. Climbing',
  website: 'https://stonecoclimbing.com/',
  address: {
    streetNumber: '777',
    streetName: 'Graham Rd',
    city: 'College Station',
    region: 'TX',
    postalCode: '77845',
    country: 'US',
    latitude: 30.571,
    longitude: -96.282,
  },
  amenities: amenities('bouldering', 'yoga'),
};
