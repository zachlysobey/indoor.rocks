import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const outsideInClimbingGym: ClimbingGym = {
  name: 'Outside-In Climbing Gym',
  description: 'Inside the Chocolate Moose.',
  address: {
    streetNumber: '1818',
    streetName: 'Harper Rd',
    city: 'Beckley',
    region: 'WV',
    postalCode: '25801',
    country: 'US',
    latitude: 37.788,
    longitude: -81.209,
  },
  amenities: amenities('top-rope'),
};
