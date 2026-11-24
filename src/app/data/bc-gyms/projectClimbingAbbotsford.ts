import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { projectClimbing } from "../companies/projectClimbing";

export const projectClimbingAbbotsford: ClimbingGym = {
  name: 'Project Climbing Abbotsford',
  parent: projectClimbing,
  address: {
    streetNumber: '34100',
    streetName: 'South Fraser Way, Unit 3',
    city: 'Abbotsford',
    state: 'BC',
    postalCode: 'V2S 2C6',
    country: 'Canada',
    latitude: 49.040,
    longitude: -122.279,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga'),
};
