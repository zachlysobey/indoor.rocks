import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bendRockGym: ClimbingGym = {
  name: 'Bend Rock Gym',
  website: 'https://www.bendrockgym.com/',
  address: {
    streetNumber: '1182',
    streetName: 'SE Centennial Ct',
    city: 'Bend',
    state: 'OR',
    postalCode: '97702',
    country: 'USA',
    latitude: 44.040,
    longitude: -121.298,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'free-weights'),
};
