import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { latitude } from "../companies/latitude";

export const latitudeVirginiaBeach: ClimbingGym = {
  name: 'Latitude Climbing + Fitness Virginia Beach',
  website: 'https://latitudeclimbing.com',
  parent: latitude,
  address: {
    streetNumber: '4554',
    streetName: 'Virginia Beach Blvd',
    city: 'Virginia Beach',
    state: 'VA',
    postalCode: '23462',
    country: 'USA',
    latitude: 36.845,
    longitude: -76.136,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
