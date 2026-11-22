import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { touchstone } from "../companies/touchstone";

export const laBoulders: ClimbingGym = {
  name: 'LA Boulders',
  website: 'https://touchstoneclimbing.com/la-boulders/',
  description: 'Primarily a bouldering gym, with some sport routes.',
  parent: touchstone,
  address: {
    streetNumber: '1375',
    streetName: 'E 6th St',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90021',
    country: 'USA',
    latitude: 34.037,
    longitude: -118.233,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights'),
};
