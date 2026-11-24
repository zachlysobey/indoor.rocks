import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const verticalHorizons: ClimbingGym = {
  name: 'Vertical Horizons Climbing Gym',
  address: {
    streetNumber: '3625',
    streetName: 'S 91st St',
    city: 'Fort Smith',
    region: 'AR',
    postalCode: '72903',
    country: 'US',
    latitude: 35.345,
    longitude: -94.340,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};
