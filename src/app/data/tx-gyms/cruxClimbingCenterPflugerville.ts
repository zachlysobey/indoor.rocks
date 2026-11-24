import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { crux } from "../companies/crux";

export const cruxClimbingCenterPflugerville: ClimbingGym = {
  name: 'Crux Climbing Center Pflugerville',
  website: 'https://www.cruxclimbingcenter.com/pflugerville/',
  parent: crux,
  address: {
    streetNumber: '18817',
    streetName: 'N Heatherwilde Blvd',
    city: 'Pflugerville',
    region: 'TX',
    postalCode: '78660',
    country: 'US',
    latitude: 30.480,
    longitude: -97.637,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga', 'sauna'),
};
