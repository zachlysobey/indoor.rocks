import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const powellRiverClimbingCoop: ClimbingGym = {
  name: 'Powell River Climbing Co-op',
  description: 'Member-owned co-op in the Townsite Public Market.',
  address: {
    streetNumber: '5831',
    streetName: 'Ash Ave',
    city: 'Powell River',
    region: 'BC',
    postalCode: 'V8A 4R5',
    country: 'CA',
    latitude: 49.872,
    longitude: -124.553,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
