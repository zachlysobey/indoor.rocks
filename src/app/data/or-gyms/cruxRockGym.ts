import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cruxRockGym: ClimbingGym = {
  name: 'Crux Rock Gym',
  website: 'https://www.cruxrock.com/',
  address: {
    streetNumber: '401',
    streetName: 'W 3rd Ave',
    city: 'Eugene',
    state: 'OR',
    postalCode: '97401',
    country: 'USA',
    latitude: 44.055,
    longitude: -123.097,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
