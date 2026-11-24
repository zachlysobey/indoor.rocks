import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const verticalDreams: ClimbingGym = {
  name: 'Vertical Dreams',
  website: 'https://verticaldreams.com/locations/manchester/',
  description: 'In a Millyard mill building, with the tallest climbing wall in New Hampshire.',
  address: {
    streetNumber: '250',
    streetName: 'Commercial St',
    city: 'Manchester',
    region: 'NH',
    postalCode: '03101',
    country: 'US',
    latitude: 42.993,
    longitude: -71.467,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
