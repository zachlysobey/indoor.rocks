import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { calgaryClimbingCentre } from "../companies/calgaryClimbingCentre";

export const socalBouldering: ClimbingGym = {
  name: 'SoCal Bouldering',
  website: 'https://www.calgaryclimbing.com/locations/socal-south-calgary/',
  description: 'Bouldering only, for climbers 7 and up.',
  parent: calgaryClimbingCentre,
  address: {
    streetNumber: '75',
    streetName: 'Shawville Link SE',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2Y 3Z6',
    country: 'CA',
    latitude: 50.898,
    longitude: -114.068,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
