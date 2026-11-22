import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gravityLab: ClimbingGym = {
  name: 'Gravity Lab',
  website: 'https://www.gravitylabclimbing.com/',
  address: {
    streetNumber: '732',
    streetName: 'County Road 233',
    city: 'Durango',
    state: 'CO',
    postalCode: '81301',
    country: 'USA',
    latitude: 37.226,
    longitude: -107.838,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
