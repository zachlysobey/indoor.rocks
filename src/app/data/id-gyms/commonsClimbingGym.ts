import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const commonsClimbingGym: ClimbingGym = {
  name: 'The Commons Climbing Gym',
  address: {
    streetNumber: '4795',
    streetName: 'W Emerald St',
    city: 'Boise',
    state: 'ID',
    postalCode: '83706',
    country: 'USA',
    latitude: 43.606,
    longitude: -116.255,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
