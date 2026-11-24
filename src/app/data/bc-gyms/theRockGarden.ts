import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theRockGarden: ClimbingGym = {
  name: 'The Rock Garden',
  website: 'https://climbthegarden.com',
  address: {
    streetNumber: '2450',
    streetName: '14 Ave, Suite 105',
    city: 'Vernon',
    region: 'BC',
    postalCode: 'V1T 8C1',
    country: 'CA',
    latitude: 50.255,
    longitude: -119.279,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
