import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbWoodlands: ClimbingGym = {
  name: 'CLIMB Woodlands',
  website: 'http://climbwoodlands.com/',
  address: {
    streetNumber: '7515',
    streetName: 'Oak Bluff Dr',
    city: 'Magnolia',
    region: 'TX',
    postalCode: '77354',
    country: 'US',
    latitude: 30.197,
    longitude: -95.581,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
