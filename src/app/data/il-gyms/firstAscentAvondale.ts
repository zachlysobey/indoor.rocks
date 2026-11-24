import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { firstAscent } from "../companies/firstAscent";

export const firstAscentAvondale: ClimbingGym = {
  name: 'First Ascent Avondale',
  website: 'https://faclimbing.com/chicago/avondale/',
  parent: firstAscent,
  address: {
    streetNumber: '3516',
    streetName: 'N Spaulding Ave',
    city: 'Chicago',
    region: 'IL',
    postalCode: '60618',
    country: 'US',
    latitude: 41.945,
    longitude: -87.710,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
