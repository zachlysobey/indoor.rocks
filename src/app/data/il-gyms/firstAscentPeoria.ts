import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { firstAscent } from "../companies/firstAscent";

export const firstAscentPeoria: ClimbingGym = {
  name: 'First Ascent Peoria',
  website: 'https://faclimbing.com/peoria/location/',
  parent: firstAscent,
  address: {
    streetNumber: '927',
    streetName: 'SW Washington St',
    city: 'Peoria',
    region: 'IL',
    postalCode: '61602',
    country: 'US',
    latitude: 40.687,
    longitude: -89.597,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
