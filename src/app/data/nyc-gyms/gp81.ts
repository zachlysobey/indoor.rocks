import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gp81: ClimbingGym = {
  name: 'GP81',
  description: 'Moved from Greenpoint to Bushwick.',
  address: {
    streetNumber: '379',
    streetName: 'Jefferson St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11237',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights'),
};
