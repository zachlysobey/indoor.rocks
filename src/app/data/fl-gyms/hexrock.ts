import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const hexrock: ClimbingGym = {
  name: 'HEXROCK Climbing',
  description: 'Formerly Project 24. Opened June 2026.',
  address: {
    streetNumber: '1355',
    streetName: 'Sarasota Center Blvd',
    city: 'Sarasota',
    state: 'FL',
    postalCode: '34240',
    country: 'USA',
    latitude: 27.338,
    longitude: -82.445,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
