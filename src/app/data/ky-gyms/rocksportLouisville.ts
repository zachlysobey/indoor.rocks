import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocksportLouisville: ClimbingGym = {
  name: 'Rocksport Climbing Gym',
  address: {
    streetNumber: '10901',
    streetName: 'Plantside Dr',
    city: 'Louisville',
    state: 'KY',
    postalCode: '40299',
    country: 'USA',
    latitude: 38.225,
    longitude: -85.565,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
