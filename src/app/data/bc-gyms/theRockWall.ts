import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theRockWall: ClimbingGym = {
  name: 'The Rock Wall',
  website: 'https://therockwall.com',
  address: {
    streetNumber: '11455',
    streetName: '201A St, Unit 6',
    city: 'Maple Ridge',
    state: 'BC',
    postalCode: 'V2X 0Y3',
    country: 'Canada',
    latitude: 49.207,
    longitude: -122.665,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
