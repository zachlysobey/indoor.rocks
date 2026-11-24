import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { thePad } from "../companies/thePad";

export const thePadSanLuisObispo: ClimbingGym = {
  name: 'The Pad San Luis Obispo',
  website: 'https://thepadclimbing.org/san-luis-obispo/',
  parent: thePad,
  address: {
    streetNumber: '888',
    streetName: 'Ricardo Ct',
    city: 'San Luis Obispo',
    region: 'CA',
    postalCode: '93401',
    country: 'US',
    latitude: 35.249,
    longitude: -120.643,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga', 'free-weights', 'machines'),
};
