import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gripstoneClimbing: ClimbingGym = {
  name: 'Gripstone Climbing',
  website: 'https://gripstoneclimbing.com/',
  description: 'Climbing gym and cafe with walls designed by Tony Yaniro.',
  address: {
    streetNumber: '319',
    streetName: 'N Lee Blvd',
    city: 'Prescott',
    state: 'AZ',
    postalCode: '86301',
    country: 'USA',
    latitude: 34.545,
    longitude: -112.449,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
