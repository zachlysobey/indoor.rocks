import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const indoorAscent: ClimbingGym = {
  name: 'Indoor Ascent',
  website: 'https://www.indoorascent.com/',
  address: {
    streetNumber: '47',
    streetName: 'Broadway',
    city: 'Dover',
    region: 'NH',
    postalCode: '03820',
    country: 'US',
    latitude: 43.196,
    longitude: -70.876,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
