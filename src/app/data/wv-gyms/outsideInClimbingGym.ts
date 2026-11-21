import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const outsideInClimbingGym: ClimbingGym = {
  name: 'Outside-In Climbing Gym',
  description: 'Inside the Chocolate Moose.',
  address: {
    streetNumber: '1818',
    streetName: 'Harper Rd',
    city: 'Beckley',
    state: 'WV',
    postalCode: '25801',
    country: 'USA',
    latitude: 37.788,
    longitude: -81.209,
  },
  amenities: amenities('top-rope'),
};
