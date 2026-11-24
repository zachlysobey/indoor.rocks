import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const verticalVentures: ClimbingGym = {
  name: 'Vertical Ventures',
  description: 'In the EDGE District.',
  address: {
    streetNumber: '116',
    streetName: '18th St S',
    city: 'St. Petersburg',
    region: 'FL',
    postalCode: '33712',
    country: 'US',
    latitude: 27.770,
    longitude: -82.660,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
