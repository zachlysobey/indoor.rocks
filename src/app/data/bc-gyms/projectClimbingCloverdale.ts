import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { projectClimbing } from "../companies/projectClimbing";

export const projectClimbingCloverdale: ClimbingGym = {
  name: 'Project Climbing Cloverdale',
  parent: projectClimbing,
  address: {
    streetNumber: '17828',
    streetName: '65A Ave, Unit 119',
    city: 'Surrey',
    state: 'BC',
    postalCode: 'V3S 1Z3',
    country: 'Canada',
    latitude: 49.120,
    longitude: -122.729,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};
