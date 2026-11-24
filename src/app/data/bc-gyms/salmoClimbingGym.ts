import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const salmoClimbingGym: ClimbingGym = {
  name: 'Salmo Climbing Gym',
  website: 'https://salmoclimb.gymdesk.com',
  description: 'Volunteer-run nonprofit, in the Salmo Valley Youth & Community Centre. Bouldering only.',
  address: {
    streetNumber: '206',
    streetName: '7th St',
    city: 'Salmo',
    state: 'BC',
    postalCode: 'V0G 1Z0',
    country: 'Canada',
    latitude: 49.195,
    longitude: -117.278,
  },
  amenities: amenities('bouldering'),
};
