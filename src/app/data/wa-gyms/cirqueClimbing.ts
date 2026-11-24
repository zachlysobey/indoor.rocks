import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cirqueClimbing: ClimbingGym = {
  name: 'Cirque Climbing',
  website: 'https://www.cirqueclimbing.com/',
  address: {
    streetNumber: '8276',
    streetName: '28th Ct NE',
    city: 'Lacey',
    region: 'WA',
    postalCode: '98516',
    country: 'US',
    latitude: 47.076,
    longitude: -122.760,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
