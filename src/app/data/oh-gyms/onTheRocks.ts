import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const onTheRocks: ClimbingGym = {
  name: 'On The Rocks Climbing Gym',
  address: {
    streetNumber: '8701',
    streetName: 'Leavitt Rd',
    city: 'Elyria',
    region: 'OH',
    postalCode: '44035',
    country: 'US',
    latitude: 41.360,
    longitude: -82.215,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
