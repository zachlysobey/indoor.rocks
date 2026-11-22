import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const goldCrushClimbingGym: ClimbingGym = {
  name: 'Gold Crush Climbing Gym',
  website: 'http://www.goldcrushclimbing.com/',
  address: {
    streetNumber: '416',
    streetName: 'Crown Point Cir',
    city: 'Grass Valley',
    state: 'CA',
    postalCode: '95945',
    country: 'USA',
    latitude: 39.205,
    longitude: -121.050,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights'),
};
