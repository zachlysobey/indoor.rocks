import type { ClimbingGym } from "@/app/dataModel";
import { amenityMap } from "../amenityMap";

export const vitalBrooklyn: ClimbingGym = {
  name: 'Vital Brooklyn',
  address: {
    state: 'NY',
    streetNumber: '221',
    streetName: 'N 14th St',
    city: 'Brooklyn',
    postalCode: '11249',
    country: 'USA'
  },
  amenities: [
    amenityMap['bouldering'],
    amenityMap['machines'],
    amenityMap['free-weights'],
    amenityMap['yoga'],
    amenityMap['sauna'],
  ],
};
