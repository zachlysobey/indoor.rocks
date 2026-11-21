import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hoosierHeights } from "../companies/hoosierHeights";

export const climbNulu: ClimbingGym = {
  name: 'Climb NuLu',
  description: 'Bouldering only.',
  parent: hoosierHeights,
  address: {
    streetNumber: '1000',
    streetName: 'E Market St',
    city: 'Louisville',
    state: 'KY',
    postalCode: '40206',
    country: 'USA',
    latitude: 38.253,
    longitude: -85.736,
  },
  amenities: amenities('bouldering'),
};
