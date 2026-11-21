import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theCrag } from "../companies/theCrag";

export const theCragNashville: ClimbingGym = {
  name: 'The Crag Nashville',
  parent: theCrag,
  address: {
    streetNumber: '15115',
    streetName: 'Old Hickory Blvd',
    city: 'Nashville',
    state: 'TN',
    postalCode: '37211',
    country: 'USA',
    latitude: 36.045,
    longitude: -86.705,
  },
  amenities: amenities('bouldering', 'yoga'),
};
