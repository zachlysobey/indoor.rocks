import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hoosierHeights } from "../companies/hoosierHeights";

export const climbCincy: ClimbingGym = {
  name: 'Climb Cincy',
  description: 'Bouldering only.',
  parent: hoosierHeights,
  address: {
    streetNumber: '1708',
    streetName: 'Blue Rock St',
    city: 'Cincinnati',
    region: 'OH',
    postalCode: '45223',
    country: 'US',
    latitude: 39.165,
    longitude: -84.540,
  },
  amenities: amenities('bouldering'),
};
