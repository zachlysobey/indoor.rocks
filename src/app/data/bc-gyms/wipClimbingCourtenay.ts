import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { wipClimbing } from "../companies/wipClimbing";

export const wipClimbingCourtenay: ClimbingGym = {
  name: 'WIP Climbing Courtenay',
  parent: wipClimbing,
  address: {
    streetNumber: '780',
    streetName: '30th St',
    city: 'Courtenay',
    state: 'BC',
    postalCode: 'V9N',
    country: 'Canada',
    latitude: 49.702,
    longitude: -124.982,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights'),
};
