import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { firstAscent } from "../companies/firstAscent";

export const firstAscentUptown: ClimbingGym = {
  name: 'First Ascent Uptown',
  website: 'https://faclimbing.com/chicago/uptown/',
  description: 'Bouldering only.',
  parent: firstAscent,
  address: {
    streetNumber: '4718',
    streetName: 'N Broadway',
    city: 'Chicago',
    state: 'IL',
    postalCode: '60640',
    country: 'USA',
    latitude: 41.968,
    longitude: -87.659,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
