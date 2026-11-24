import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbBase5 } from "../companies/climbBase5";

export const climbBase5Coquitlam: ClimbingGym = {
  name: 'Climb Base5 Coquitlam',
  parent: climbBase5,
  address: {
    streetNumber: '98',
    streetName: 'Brigantine Dr',
    city: 'Coquitlam',
    state: 'BC',
    postalCode: 'V3K 6Z6',
    country: 'Canada',
    latitude: 49.228,
    longitude: -122.850,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};
