import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const coastalClimbingCentre: ClimbingGym = {
  name: 'Coastal Climbing Centre',
  address: {
    streetNumber: '7728',
    streetName: '128 St, Unit 202',
    city: 'Surrey',
    region: 'BC',
    postalCode: 'V3W 1L3',
    country: 'CA',
    latitude: 49.144,
    longitude: -122.871,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
