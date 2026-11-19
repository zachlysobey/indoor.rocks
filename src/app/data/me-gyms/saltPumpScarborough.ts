import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { saltPump } from "../companies/saltPump";

export const saltPumpScarborough: ClimbingGym = {
  name: 'Salt Pump Scarborough',
  website: 'https://www.saltpumpclimbing.com/',
  parent: saltPump,
  address: {
    streetNumber: '36',
    streetName: 'Haigis Pkwy',
    city: 'Scarborough',
    state: 'ME',
    postalCode: '04074',
    country: 'USA',
    latitude: 43.617,
    longitude: -70.350,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
