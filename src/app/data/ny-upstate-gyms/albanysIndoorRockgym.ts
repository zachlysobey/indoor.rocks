import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const albanysIndoorRockgym: ClimbingGym = {
  name: "Albany's Indoor Rockgym",
  website: 'https://airrockgym.com/',
  description: 'Also has about a third of a mile of indoor caving routes.',
  address: {
    streetNumber: '4C',
    streetName: 'Vatrano Rd',
    city: 'Albany',
    region: 'NY',
    postalCode: '12205',
    country: 'US',
    latitude: 42.699,
    longitude: -73.811,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
