import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const steamboatClimbingCollective: ClimbingGym = {
  name: 'Steamboat Climbing Collective',
  website: 'https://steamboatclimbingcollective.com/',
  address: {
    streetNumber: '2673',
    streetName: 'Jacob Cir',
    city: 'Steamboat Springs',
    state: 'CO',
    postalCode: '80487',
    country: 'USA',
    latitude: 40.475,
    longitude: -106.828,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
