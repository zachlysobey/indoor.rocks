import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";

export const rockClimbFairfield: ClimbingGym = {
  name: 'Rock Climb Fairfield',
  address: {
    streetNumber: '85',
    streetName: 'Mill Plain Rd, Bldg T',
    city: 'Fairfield',
    state: 'CT',
    postalCode: '06824',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
};
