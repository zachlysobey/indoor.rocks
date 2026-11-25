import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const junctionClimbingCentre: ClimbingGym = {
  name: 'Junction Climbing Centre',
  website: 'https://junctionclimbing.com',
  address: {
    streetNumber: '1030',
    streetName: 'Elias St',
    city: 'London',
    region: 'ON',
    postalCode: 'N5W 3P6',
    country: 'CA',
    latitude: 42.991,
    longitude: -81.222,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
