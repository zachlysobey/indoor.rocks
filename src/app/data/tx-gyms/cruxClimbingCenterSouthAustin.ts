import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { crux } from "../companies/crux";

export const cruxClimbingCenterSouthAustin: ClimbingGym = {
  name: 'Crux Climbing Center South Austin',
  website: 'https://www.cruxclimbingcenter.com/south-austin/',
  description: 'Replaced the original Pickle Rd gym; opened May 4, 2026.',
  parent: crux,
  address: {
    streetNumber: '220',
    streetName: 'Ralph Ablanedo Dr',
    city: 'Austin',
    state: 'TX',
    postalCode: '78748',
    country: 'USA',
    latitude: 30.170,
    longitude: -97.789,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};
