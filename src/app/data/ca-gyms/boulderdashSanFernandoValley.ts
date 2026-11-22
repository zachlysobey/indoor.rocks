import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderdash } from "../companies/boulderdash";

export const boulderdashSanFernandoValley: ClimbingGym = {
  name: 'Boulderdash San Fernando Valley',
  website: 'https://sfv.boulderdashclimbing.com/',
  parent: boulderdash,
  address: {
    streetNumber: '19801',
    streetName: 'Nordhoff Pl',
    city: 'Chatsworth',
    state: 'CA',
    postalCode: '91311',
    country: 'USA',
    latitude: 34.235,
    longitude: -118.565,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
