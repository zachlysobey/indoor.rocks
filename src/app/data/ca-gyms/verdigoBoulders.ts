import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const verdigoBoulders: ClimbingGym = {
  name: 'Verdigo Boulders',
  website: 'https://touchstoneclimbing.com/verdigo-boulders/',
  description: 'Bouldering gym.',
  parent: touchstone,
  address: {
    streetNumber: '266',
    streetName: 'E Magnolia Blvd',
    city: 'Burbank',
    region: 'CA',
    postalCode: '91502',
    country: 'US',
    latitude: 34.178,
    longitude: -118.307,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights'),
};
