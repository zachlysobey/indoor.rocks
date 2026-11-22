import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { flagstaffClimbing } from "../companies/flagstaffClimbing";

export const flagstaffClimbingDowntownCrag: ClimbingGym = {
  name: 'Flagstaff Climbing Downtown Crag',
  website: 'https://www.flagstaffclimbing.com/',
  description: 'Rope climbing and bouldering, with a gear shop.',
  parent: flagstaffClimbing,
  address: {
    streetNumber: '205',
    streetName: 'S San Francisco St',
    city: 'Flagstaff',
    state: 'AZ',
    postalCode: '86001',
    country: 'USA',
    latitude: 35.196,
    longitude: -111.648,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
