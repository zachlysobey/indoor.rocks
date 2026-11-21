import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbNashville } from "../companies/climbNashville";

export const climbMurfreesboro: ClimbingGym = {
  name: 'Climb Murfreesboro',
  parent: climbNashville,
  address: {
    streetNumber: '1660',
    streetName: 'Memorial Blvd',
    city: 'Murfreesboro',
    state: 'TN',
    postalCode: '37129',
    country: 'USA',
    latitude: 35.870,
    longitude: -86.385,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
