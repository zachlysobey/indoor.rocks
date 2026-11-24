import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const faClimbingStationSquare: ClimbingGym = {
  name: 'FA Climbing Station Square',
  website: 'https://faclimbing.com/pittsburgh/station-square/',
  address: {
    streetNumber: '125',
    streetName: 'W Station Square Dr',
    city: 'Pittsburgh',
    region: 'PA',
    postalCode: '15219',
    country: 'US',
    latitude: 40.434,
    longitude: -80.005,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
