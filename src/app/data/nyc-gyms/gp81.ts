import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gp81: ClimbingGym = {
  name: 'GP81',
  website: 'https://www.gp-81.com/',
  description: 'Moved from Greenpoint to Bushwick.',
  address: {
    streetNumber: '379',
    streetName: 'Jefferson St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11237',
    country: 'USA',
    latitude: 40.704,
    longitude: -73.924,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
