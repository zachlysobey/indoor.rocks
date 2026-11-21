import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockGem: ClimbingGym = {
  name: 'Rock Gem Climbing Center',
  address: {
    streetNumber: '4300',
    streetName: 'E Blue Lick Rd',
    city: 'Louisville',
    state: 'KY',
    postalCode: '40229',
    country: 'USA',
    latitude: 38.075,
    longitude: -85.675,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
