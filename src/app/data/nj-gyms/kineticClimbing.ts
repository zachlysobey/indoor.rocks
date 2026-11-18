import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const kineticClimbing: ClimbingGym = {
  name: 'Kinetic Climbing',
  website: 'https://kineticclimbingnj.com/',
  description: 'A bouldering-only gym.',
  address: {
    streetNumber: '1155',
    streetName: 'S Black Horse Pike',
    city: 'Williamstown',
    state: 'NJ',
    postalCode: '08094',
    country: 'USA',
    latitude: 39.672,
    longitude: -74.981,
  },
  amenities: amenities('bouldering'),
};
