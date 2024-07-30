import { ClimbingGym } from "@/app/dataModel";
import { amenityMap } from "../amenityMap";

export const theCliffsLic: ClimbingGym = {
  name: 'The Cliffs at LIC',
  address: {
    state: 'NY',
    streetNumber: '11-11',
    streetName: '44th Dr',
    city: 'Long Island City',
    postalCode: '11101',
    country: 'USA'
  },
  amenities: [
    amenityMap['bouldering'],
    amenityMap['top-rope'],
    amenityMap['auto-belays'],
    amenityMap['machines'],
    amenityMap['free-weights'],
    amenityMap['yoga'],
  ],
};
