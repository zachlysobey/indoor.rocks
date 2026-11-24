import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const dogpatchBoulders: ClimbingGym = {
  name: 'Dogpatch Boulders',
  website: 'https://touchstoneclimbing.com/dogpatch-boulders/',
  description: 'Bouldering only.',
  parent: touchstone,
  address: {
    streetNumber: '2573',
    streetName: '3rd St',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94107',
    country: 'US',
    latitude: 37.756,
    longitude: -122.388,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
