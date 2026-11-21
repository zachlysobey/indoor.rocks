import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbTime } from "../companies/climbTime";

export const climbTimeOakley: ClimbingGym = {
  name: 'Climb Time Oakley',
  website: 'https://www.ctoba.com',
  parent: climbTime,
  address: {
    streetNumber: '4460',
    streetName: 'Orkney Ave',
    city: 'Cincinnati',
    state: 'OH',
    postalCode: '45209',
    country: 'USA',
    latitude: 39.156,
    longitude: -84.428,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
