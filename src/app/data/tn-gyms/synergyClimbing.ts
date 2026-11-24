import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const synergyClimbing: ClimbingGym = {
  name: 'Synergy Climbing and Ninja',
  description: 'Bouldering and ninja. Formerly Tennessee Bouldering Authority.',
  address: {
    streetNumber: '427',
    streetName: 'E Main St',
    city: 'Chattanooga',
    region: 'TN',
    postalCode: '37408',
    country: 'US',
    latitude: 35.031,
    longitude: -85.303,
  },
  amenities: amenities('bouldering'),
};
