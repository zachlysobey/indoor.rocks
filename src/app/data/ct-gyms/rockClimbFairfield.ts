import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockClimbFairfield: ClimbingGym = {
  name: 'Rock Climb Fairfield',
  website: 'https://www.rockclimbfairfield.com/',
  address: {
    streetNumber: '85',
    streetName: 'Mill Plain Rd, Bldg T',
    city: 'Fairfield',
    region: 'CT',
    postalCode: '06824',
    country: 'US',
    latitude: 41.145,
    longitude: -73.263,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
};
