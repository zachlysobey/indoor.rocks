import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { projectClimbing } from "../companies/projectClimbing";

export const projectClimbingChilliwack: ClimbingGym = {
  name: 'Project Climbing Chilliwack',
  website: 'https://projectclimbing.ca/chilliwack/',
  parent: projectClimbing,
  address: {
    streetNumber: '45530',
    streetName: 'Vedder Mountain Rd',
    city: 'Chilliwack',
    region: 'BC',
    postalCode: 'V2R 6H6',
    country: 'CA',
    latitude: 49.077,
    longitude: -121.984,
  },
  amenities: amenities('bouldering', 'yoga'),
};
