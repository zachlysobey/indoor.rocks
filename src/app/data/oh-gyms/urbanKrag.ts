import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const urbanKrag: ClimbingGym = {
  name: 'Urban Krag Climbing Center',
  website: 'https://www.urbankrag.com',
  description: 'In a converted church in the Oregon District.',
  address: {
    streetNumber: '125',
    streetName: 'Clay St',
    city: 'Dayton',
    state: 'OH',
    postalCode: '45402',
    country: 'USA',
    latitude: 39.756,
    longitude: -84.183,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
