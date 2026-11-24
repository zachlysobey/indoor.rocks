import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theRockOasis: ClimbingGym = {
  name: 'The Rock Oasis',
  website: 'https://www.rockoasis.com',
  address: {
    streetNumber: '388',
    streetName: 'Carlaw Ave, Suite 204',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M4M 2T4',
    country: 'CA',
    latitude: 43.664,
    longitude: -79.340,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
