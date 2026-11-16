import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const methodClimbing: ClimbingGym = {
  name: 'Method Climbing',
  address: {
    streetNumber: '16',
    streetName: 'Lombardy St',
    city: 'Newark',
    state: 'NJ',
    postalCode: '07102',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
