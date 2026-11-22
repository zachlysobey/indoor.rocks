import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { firstAscent } from "../companies/firstAscent";

export const firstAscentBlock37: ClimbingGym = {
  name: 'First Ascent Block 37',
  website: 'https://faclimbing.com/chicago/block-37/',
  description: 'Bouldering only.',
  parent: firstAscent,
  address: {
    streetNumber: '108',
    streetName: 'N State St',
    city: 'Chicago',
    state: 'IL',
    postalCode: '60602',
    country: 'USA',
    latitude: 41.884,
    longitude: -87.628,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
