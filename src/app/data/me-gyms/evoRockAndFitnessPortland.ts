import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { saltPump } from "../companies/saltPump";

export const evoRockAndFitnessPortland: ClimbingGym = {
  name: 'Evo Rock + Fitness Portland',
  website: 'https://www.evorock.com/',
  description: 'Bought by Salt Pump in May 2026.',
  parent: saltPump,
  address: {
    streetNumber: '65',
    streetName: 'Warren Ave',
    city: 'Portland',
    state: 'ME',
    postalCode: '04103',
    country: 'USA',
    latitude: 43.693,
    longitude: -70.316,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
