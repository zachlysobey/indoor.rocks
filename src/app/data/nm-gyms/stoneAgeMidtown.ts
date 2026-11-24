import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stoneAge } from "../companies/stoneAge";

export const stoneAgeMidtown: ClimbingGym = {
  name: 'Stone Age Climbing Gym Midtown',
  website: 'https://www.climbstoneage.com',
  parent: stoneAge,
  address: {
    streetNumber: '4130',
    streetName: 'Cutler Ave NE',
    city: 'Albuquerque',
    region: 'NM',
    postalCode: '87110',
    country: 'US',
    latitude: 35.105,
    longitude: -106.604,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
