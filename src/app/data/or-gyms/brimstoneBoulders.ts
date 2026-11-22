import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const brimstoneBoulders: ClimbingGym = {
  name: 'Brimstone Boulders',
  website: 'https://www.brimstoneboulders.com/',
  description: 'Bouldering gym in a former church.',
  address: {
    streetNumber: '616',
    streetName: 'State St',
    city: 'Hood River',
    state: 'OR',
    postalCode: '97031',
    country: 'USA',
    latitude: 45.708,
    longitude: -121.517,
  },
  amenities: amenities('bouldering', 'yoga'),
};
