import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const terrainParkClimbingCenter: ClimbingGym = {
  name: 'Terrain Park Climbing Center',
  website: 'https://terrainparkclimbingcenter.com',
  address: {
    streetNumber: '931',
    streetName: 'W 5th St',
    city: 'Chico',
    state: 'CA',
    postalCode: '95928',
    country: 'USA',
    latitude: 39.726,
    longitude: -121.847,
  },
  amenities: amenities('bouldering', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
