import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { spire } from "../companies/spire";

export const spireMainFacility: ClimbingGym = {
  name: 'Spire Climbing + Fitness Main Facility',
  parent: spire,
  address: {
    streetNumber: '13',
    streetName: 'Enterprise Blvd',
    city: 'Bozeman',
    state: 'MT',
    postalCode: '59718',
    country: 'USA',
    latitude: 45.692,
    longitude: -111.069,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};
