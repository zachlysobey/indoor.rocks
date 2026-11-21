import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ruckusClimbingGym: ClimbingGym = {
  name: 'Ruckus Climbing Gym',
  website: 'https://ruckusclimbinggym.com',
  address: {
    streetNumber: '5005',
    streetName: 'High Point Rd',
    city: 'Greensboro',
    state: 'NC',
    postalCode: '27407',
    country: 'USA',
    latitude: 36.028,
    longitude: -79.918,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
