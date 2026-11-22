import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const cliffsOfId: ClimbingGym = {
  name: 'Cliffs of Id',
  website: 'https://touchstoneclimbing.com/cliffs-of-id/',
  parent: touchstone,
  address: {
    streetNumber: '2537',
    streetName: 'S Fairfax Ave',
    city: 'Culver City',
    state: 'CA',
    postalCode: '90232',
    country: 'USA',
    latitude: 34.030,
    longitude: -118.369,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'free-weights', 'sauna'),
};
