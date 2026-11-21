import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbConway: ClimbingGym = {
  name: 'Climb Conway',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1157',
    streetName: "Pat's Ln",
    city: 'Conway',
    state: 'AR',
    postalCode: '72032',
    country: 'USA',
    latitude: 35.075,
    longitude: -92.430,
  },
  amenities: amenities('bouldering'),
};
