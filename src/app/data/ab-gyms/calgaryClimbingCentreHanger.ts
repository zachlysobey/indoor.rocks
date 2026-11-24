import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { calgaryClimbingCentre } from "../companies/calgaryClimbingCentre";

export const calgaryClimbingCentreHanger: ClimbingGym = {
  name: 'Calgary Climbing Centre Hanger',
  website: 'https://www.calgaryclimbing.com/locations/hanger/',
  description: '40-foot walls, and a ClimbPark.',
  parent: calgaryClimbingCentre,
  address: {
    streetNumber: '588',
    streetName: 'Aero Dr NE, Unit 106',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2E 7Y4',
    country: 'CA',
    latitude: 51.099,
    longitude: -114.011,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
