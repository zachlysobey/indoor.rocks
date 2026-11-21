import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hoosierHeights } from "../companies/hoosierHeights";

export const hoosierHeightsIndianapolis: ClimbingGym = {
  name: 'Hoosier Heights Indianapolis',
  website: 'https://www.hoosierheightsindianapolis.com',
  description: 'In Carmel.',
  parent: hoosierHeights,
  address: {
    streetNumber: '9850',
    streetName: 'Mayflower Park Dr',
    city: 'Carmel',
    state: 'IN',
    postalCode: '46032',
    country: 'USA',
    latitude: 39.933,
    longitude: -86.230,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
