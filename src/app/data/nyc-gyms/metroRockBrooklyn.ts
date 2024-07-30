import type { ClimbingGym } from "@/app/dataModel";
import { amenityMap } from "../amenityMap";

export const metroRockBrooklyn: ClimbingGym = {
  name: 'MetroRock Brooklyn',
  address: {
    state: 'NY',
    streetNumber: '321',
    streetName: 'Douglass St',
    city: 'Brooklyn',
    postalCode: '11217',
    country: 'USA'
  },
  amenities: [
    amenityMap['bouldering'],
    amenityMap['top-rope'],
    amenityMap['auto-belays'],
    amenityMap['machines'],
    amenityMap['free-weights'],
  ],
};
