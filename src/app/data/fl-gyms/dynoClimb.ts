import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const dynoClimb: ClimbingGym = {
  name: 'DynoClimb',
  address: {
    streetNumber: '528',
    streetName: 'S Woodland Blvd',
    city: 'DeLand',
    state: 'FL',
    postalCode: '32720',
    country: 'USA',
    latitude: 29.022,
    longitude: -81.303,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
