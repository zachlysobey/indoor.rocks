import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { firstAscent } from "../companies/firstAscent";

export const firstAscentArlingtonHeights: ClimbingGym = {
  name: 'First Ascent Arlington Heights',
  website: 'https://faclimbing.com/arlington-heights/info/',
  parent: firstAscent,
  address: {
    streetNumber: '701',
    streetName: 'Rohlwing Rd',
    city: 'Arlington Heights',
    state: 'IL',
    postalCode: '60005',
    country: 'USA',
    latitude: 42.050,
    longitude: -88.011,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
