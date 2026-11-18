import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ascentNewHaven: ClimbingGym = {
  name: 'Ascent New Haven',
  website: 'https://www.ascentclimbinggym.com/',
  description: 'Inside District New Haven; entrance and parking on the I-91 side.',
  address: {
    streetNumber: '470',
    streetName: 'James St',
    city: 'New Haven',
    state: 'CT',
    postalCode: '06513',
    country: 'USA',
    latitude: 41.315,
    longitude: -72.905,
  },
  amenities: amenities('bouldering', 'yoga'),
};
