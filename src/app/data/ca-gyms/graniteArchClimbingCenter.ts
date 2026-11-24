import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const graniteArchClimbingCenter: ClimbingGym = {
  name: 'Granite Arch Climbing Center',
  website: 'https://www.granitearch.com/',
  address: {
    streetNumber: '11335',
    streetName: 'Folsom Blvd',
    city: 'Rancho Cordova',
    region: 'CA',
    postalCode: '95742',
    country: 'US',
    latitude: 38.611,
    longitude: -121.272,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
