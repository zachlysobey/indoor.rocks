import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { bolderClimbing } from "../companies/bolderClimbing";

export const bolderClimbingCommunity: ClimbingGym = {
  name: 'Bolder Climbing Community',
  description: "Calgary's first bouldering-only gym, with a café.",
  parent: bolderClimbing,
  address: {
    streetNumber: '5508',
    streetName: '1 St SE',
    city: 'Calgary',
    region: 'AB',
    postalCode: 'T2H',
    country: 'CA',
    latitude: 51.000,
    longitude: -114.061,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
