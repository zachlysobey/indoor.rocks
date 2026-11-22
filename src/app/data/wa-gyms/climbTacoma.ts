import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbTacoma: ClimbingGym = {
  name: 'Climb Tacoma',
  website: 'https://www.climbtacoma.com/',
  description: 'Bouldering gym.',
  address: {
    streetNumber: '3729',
    streetName: 'S Lawrence St',
    city: 'Tacoma',
    state: 'WA',
    postalCode: '98409',
    country: 'USA',
    latitude: 47.226,
    longitude: -122.479,
  },
  amenities: amenities('bouldering'),
};
