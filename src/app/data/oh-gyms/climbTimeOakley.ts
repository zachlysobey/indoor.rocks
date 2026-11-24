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
    region: 'OH',
    postalCode: '45209',
    country: 'US',
    latitude: 39.156,
    longitude: -84.428,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
