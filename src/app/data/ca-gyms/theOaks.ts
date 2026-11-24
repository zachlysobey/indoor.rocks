import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const theOaks: ClimbingGym = {
  name: 'The Oaks',
  website: 'https://touchstoneclimbing.com/the-oaks/',
  description: 'Bouldering only.',
  parent: touchstone,
  address: {
    streetNumber: '1875',
    streetName: 'Solano Ave',
    city: 'Berkeley',
    region: 'CA',
    postalCode: '94707',
    country: 'US',
    latitude: 37.891,
    longitude: -122.278,
  },
  amenities: amenities('bouldering'),
};
