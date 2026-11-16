import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalLowerEastSide: ClimbingGym = {
  name: 'Vital Lower East Side',
  website: 'https://www.vitalclimbinggym.com/lower-east-side',
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
