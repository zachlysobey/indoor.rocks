import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbConway: ClimbingGym = {
  name: 'Climb Conway',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1157',
    streetName: "Pat's Ln",
    city: 'Conway',
    region: 'AR',
    postalCode: '72032',
    country: 'US',
    latitude: 35.075,
    longitude: -92.430,
  },
  amenities: amenities('bouldering'),
};
