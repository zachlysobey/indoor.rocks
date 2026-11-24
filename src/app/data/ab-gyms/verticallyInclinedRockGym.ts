import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const verticallyInclinedRockGym: ClimbingGym = {
  name: 'Vertically Inclined Rock Gym',
  website: 'https://verticallyinclined.com',
  description: "Edmonton's original climbing gym, open since 1996.",
  address: {
    streetNumber: '8523',
    streetName: 'Argyll Rd NW',
    city: 'Edmonton',
    region: 'AB',
    postalCode: 'T6C 4B2',
    country: 'CA',
    latitude: 53.513,
    longitude: -113.461,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
