import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hudsonBoulders: ClimbingGym = {
  name: 'Hudson Boulders',
  website: 'https://hudsonboulders.com/',
  description: 'Bouldering, plus a top-rope wall for parties.',
  address: {
    streetNumber: '195',
    streetName: 'Troy-Schenectady Rd',
    city: 'Latham',
    state: 'NY',
    postalCode: '12110',
    country: 'USA',
    latitude: 42.740,
    longitude: -73.732,
  },
  amenities: amenities('bouldering', 'yoga'),
};
