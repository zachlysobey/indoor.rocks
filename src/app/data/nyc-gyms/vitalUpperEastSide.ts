import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { vital } from "../companies/vital";

export const vitalUpperEastSide: ClimbingGym = {
  name: 'Vital Upper East Side',
  parent: vital,
  address: {
    streetNumber: '1506',
    streetName: 'Lexington Ave',
    city: 'New York',
    state: 'NY',
    postalCode: '10029',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights'),
};
