import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { firstAscent } from "../companies/firstAscent";

export const firstAscentHumboldtPark: ClimbingGym = {
  name: 'First Ascent Humboldt Park',
  website: 'https://faclimbing.com/chicago/humboldt-park/',
  description: 'Bouldering only.',
  parent: firstAscent,
  address: {
    streetNumber: '2950',
    streetName: 'W Grand Ave',
    city: 'Chicago',
    region: 'IL',
    postalCode: '60622',
    country: 'US',
    latitude: 41.891,
    longitude: -87.700,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
