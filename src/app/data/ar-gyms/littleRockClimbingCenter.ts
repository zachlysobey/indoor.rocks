import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const littleRockClimbingCenter: ClimbingGym = {
  name: 'Little Rock Climbing Center',
  address: {
    streetNumber: '12120',
    streetName: 'Colonel Glenn Rd',
    city: 'Little Rock',
    region: 'AR',
    postalCode: '72210',
    country: 'US',
    latitude: 34.710,
    longitude: -92.410,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
