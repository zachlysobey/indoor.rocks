import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const thePost: ClimbingGym = {
  name: 'The Post',
  website: 'https://touchstoneclimbing.com/the-post/',
  parent: touchstone,
  address: {
    streetNumber: '1100',
    streetName: 'N Fair Oaks Ave',
    city: 'Pasadena',
    region: 'CA',
    postalCode: '91103',
    country: 'US',
    latitude: 34.163,
    longitude: -118.150,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'free-weights', 'sauna'),
};
