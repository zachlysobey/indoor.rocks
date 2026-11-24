import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { bolderClimbing } from "../companies/bolderClimbing";

export const bolderClimbingElevated: ClimbingGym = {
  name: 'Bolder Climbing Elevated',
  description: 'Bouldering and roped climbing.',
  parent: bolderClimbing,
  address: {
    streetNumber: '12686',
    streetName: '48 St SE',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2Z',
    country: 'CA',
    latitude: 50.940,
    longitude: -113.968,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
