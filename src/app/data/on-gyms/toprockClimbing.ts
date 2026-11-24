import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const toprockClimbing: ClimbingGym = {
  name: 'Toprock Climbing',
  address: {
    streetNumber: '284',
    streetName: 'Orenda Rd, Unit 8',
    city: 'Brampton',
    region: 'ON',
    postalCode: 'L6T 5S3',
    country: 'CA',
    latitude: 43.724,
    longitude: -79.700,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
