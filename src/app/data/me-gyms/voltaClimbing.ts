import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const voltaClimbing: ClimbingGym = {
  name: 'Volta Climbing',
  website: 'https://www.voltaclimbing.com/',
  description: 'A few miles from Acadia National Park.',
  address: {
    streetNumber: '8',
    streetName: 'Road Not Taken',
    city: 'Trenton',
    state: 'ME',
    postalCode: '04605',
    country: 'USA',
    latitude: 44.493,
    longitude: -68.396,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};
