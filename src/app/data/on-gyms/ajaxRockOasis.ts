import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ajaxRockOasis: ClimbingGym = {
  name: 'Ajax Rock Oasis',
  website: 'https://ajaxrockoasis.com',
  description: 'Inside the Ajax Community Centre.',
  address: {
    streetNumber: '75',
    streetName: 'Centennial Rd',
    city: 'Ajax',
    region: 'ON',
    postalCode: 'L1S',
    country: 'CA',
    latitude: 43.845,
    longitude: -79.021,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
