import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementCallowhill: ClimbingGym = {
  name: 'Movement Callowhill',
  website: 'https://movementgyms.com/callowhill/',
  description: 'Formerly The Cliffs at Callowhill.',
  parent: movement,
  address: {
    streetNumber: '1010',
    streetName: 'Callowhill St',
    city: 'Philadelphia',
    state: 'PA',
    postalCode: '19123',
    country: 'USA',
    latitude: 39.959,
    longitude: -75.155,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};
