import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const verticalVentures: ClimbingGym = {
  name: 'Vertical Ventures',
  description: 'In the EDGE District.',
  address: {
    streetNumber: '116',
    streetName: '18th St S',
    city: 'St. Petersburg',
    state: 'FL',
    postalCode: '33712',
    country: 'USA',
    latitude: 27.770,
    longitude: -82.660,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
