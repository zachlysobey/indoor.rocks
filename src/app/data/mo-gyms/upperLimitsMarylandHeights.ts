import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { upperLimits } from "../companies/upperLimits";

export const upperLimitsMarylandHeights: ClimbingGym = {
  name: 'Upper Limits Maryland Heights',
  parent: upperLimits,
  address: {
    streetNumber: '1874',
    streetName: 'Lackland Hill Pkwy',
    city: 'St. Louis',
    region: 'MO',
    postalCode: '63146',
    country: 'US',
    latitude: 38.705,
    longitude: -90.445,
  },
  amenities: amenities('bouldering', 'lead', 'auto-belays'),
};
