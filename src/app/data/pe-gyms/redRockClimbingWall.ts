import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const redRockClimbingWall: ClimbingGym = {
  name: 'Red Rock Climbing Wall',
  description: "PEI's only climbing gym, in the Norton Diamond soccer complex.",
  address: {
    streetNumber: '21',
    streetName: 'Myrtle St',
    city: 'Stratford',
    region: 'PE',
    postalCode: 'C1B 1P4',
    country: 'CA',
    latitude: 46.222,
    longitude: -63.093,
  },
  amenities: amenities('auto-belays'),
};
