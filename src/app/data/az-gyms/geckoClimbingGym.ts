import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const geckoClimbingGym: ClimbingGym = {
  name: 'Gecko Climbing Gym',
  website: 'https://geckoclimbinggym.com/',
  description: 'Roped walls over 30 feet, a lead-only cave, bouldering and a fitness center.',
  address: {
    streetNumber: '24400',
    streetName: 'N 19th Ave',
    city: 'Phoenix',
    region: 'AZ',
    postalCode: '85085',
    country: 'US',
    latitude: 33.703,
    longitude: -112.099,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
