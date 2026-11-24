import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const epicClimbing: ClimbingGym = {
  name: 'EPIC Climbing and Fitness',
  description: 'Formerly EVO Rock + Fitness Indy.',
  address: {
    streetNumber: '1931',
    streetName: 'Stout Field West Dr',
    city: 'Indianapolis',
    region: 'IN',
    postalCode: '46241',
    country: 'US',
    latitude: 39.735,
    longitude: -86.240,
  },
  amenities: amenities('top-rope'),
};
