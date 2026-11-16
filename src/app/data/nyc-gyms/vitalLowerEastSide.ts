import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { vital } from "../companies";

export const vitalLowerEastSide: ClimbingGym = {
  name: 'Vital Lower East Side',
  parent: vital,
  address: {
    streetNumber: '182',
    streetName: 'Broome St',
    city: 'New York',
    state: 'NY',
    postalCode: '10002',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'yoga'),
};
