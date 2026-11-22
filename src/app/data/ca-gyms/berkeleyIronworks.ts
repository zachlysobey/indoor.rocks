import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const berkeleyIronworks: ClimbingGym = {
  name: 'Berkeley Ironworks',
  website: 'https://touchstoneclimbing.com/ironworks/',
  parent: touchstone,
  address: {
    streetNumber: '800',
    streetName: 'Potter St',
    city: 'Berkeley',
    state: 'CA',
    postalCode: '94710',
    country: 'USA',
    latitude: 37.851,
    longitude: -122.290,
  },
  amenities: amenities('bouldering', 'lead', 'free-weights', 'yoga'),
};
