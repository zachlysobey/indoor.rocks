import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbNashville } from "../companies/climbNashville";

export const climbBentonville: ClimbingGym = {
  name: 'Climb Bentonville',
  parent: climbNashville,
  address: {
    streetNumber: '801',
    streetName: 'SW 14th St',
    city: 'Bentonville',
    state: 'AR',
    postalCode: '72712',
    country: 'USA',
    latitude: 36.355,
    longitude: -94.220,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
