import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbBase5 } from "../companies/climbBase5";

export const climbBase5NorthVancouver: ClimbingGym = {
  name: 'Climb Base5 North Vancouver',
  description: 'Formerly The Edge Climbing Centre.',
  parent: climbBase5,
  address: {
    streetNumber: '1485',
    streetName: 'Welch St, Unit 2',
    city: 'North Vancouver',
    state: 'BC',
    postalCode: 'V7P 1B5',
    country: 'Canada',
    latitude: 49.320,
    longitude: -123.116,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
