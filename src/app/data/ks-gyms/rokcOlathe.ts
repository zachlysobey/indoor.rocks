import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rokc } from "../companies/rokc";

export const rokcOlathe: ClimbingGym = {
  name: 'RoKC Olathe',
  parent: rokc,
  address: {
    streetNumber: '654',
    streetName: 'N Central St',
    city: 'Olathe',
    region: 'KS',
    postalCode: '66061',
    country: 'US',
    latitude: 38.888,
    longitude: -94.815,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga', 'sauna'),
};
