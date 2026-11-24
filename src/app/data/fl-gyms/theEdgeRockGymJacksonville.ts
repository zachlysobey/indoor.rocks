import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theEdgeRockGymJacksonville: ClimbingGym = {
  name: 'The Edge Rock Gym Jacksonville',
  address: {
    streetNumber: '3563',
    streetName: 'Philips Hwy',
    city: 'Jacksonville',
    region: 'FL',
    postalCode: '32207',
    country: 'US',
    latitude: 30.282,
    longitude: -81.635,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
