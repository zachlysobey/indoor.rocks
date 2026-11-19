import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const petraCliffs: ClimbingGym = {
  name: 'Petra Cliffs Climbing Center',
  website: 'https://www.petracliffs.com/',
  address: {
    streetNumber: '105',
    streetName: 'Briggs St',
    city: 'Burlington',
    state: 'VT',
    postalCode: '05401',
    country: 'USA',
    latitude: 44.452,
    longitude: -73.218,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
