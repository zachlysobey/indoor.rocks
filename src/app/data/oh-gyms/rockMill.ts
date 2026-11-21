import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockMill: ClimbingGym = {
  name: 'Rock Mill Climbing',
  address: {
    streetNumber: '677',
    streetName: 'Carroll St',
    city: 'Akron',
    state: 'OH',
    postalCode: '44304',
    country: 'USA',
    latitude: 41.071,
    longitude: -81.495,
  },
  amenities: amenities('bouldering', 'yoga'),
};
