import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hoosierHeights } from "../companies/hoosierHeights";

export const hoosierHeightsBloomington: ClimbingGym = {
  name: 'Hoosier Heights Bloomington',
  website: 'https://hoosierheights.com',
  parent: hoosierHeights,
  address: {
    streetNumber: '5100',
    streetName: 'S Rogers St',
    city: 'Bloomington',
    state: 'IN',
    postalCode: '47403',
    country: 'USA',
    latitude: 39.115,
    longitude: -86.540,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
