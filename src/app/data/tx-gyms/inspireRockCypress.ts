import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { inspireRock } from "../companies/inspireRock";

export const inspireRockCypress: ClimbingGym = {
  name: 'inSPIRE Rock Cypress',
  website: 'https://inspirerock.com/cypress/',
  parent: inspireRock,
  address: {
    streetNumber: '16730',
    streetName: 'House Hahl Rd',
    city: 'Cypress',
    region: 'TX',
    postalCode: '77433',
    country: 'US',
    latitude: 29.951,
    longitude: -95.672,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
