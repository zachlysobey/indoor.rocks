import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockClimbFairfield: ClimbingGym = {
  name: 'Rock Climb Fairfield',
  website: 'https://www.rockclimbfairfield.com/',
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
