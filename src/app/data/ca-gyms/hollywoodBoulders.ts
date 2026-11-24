import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const hollywoodBoulders: ClimbingGym = {
  name: 'Hollywood Boulders',
  website: 'https://touchstoneclimbing.com/hollywood-boulders/',
  description: 'Bouldering gym.',
  parent: touchstone,
  address: {
    streetNumber: '1107',
    streetName: 'N Bronson Ave',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90038',
    country: 'US',
    latitude: 34.091,
    longitude: -118.318,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines', 'sauna'),
};
