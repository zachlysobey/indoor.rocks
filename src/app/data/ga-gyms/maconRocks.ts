import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const maconRocks: ClimbingGym = {
  name: 'Macon Rocks Climbing Gym',
  address: {
    streetNumber: '527',
    streetName: 'DT Walton Sr Way',
    city: 'Macon',
    region: 'GA',
    postalCode: '31201',
    country: 'US',
    latitude: 32.836,
    longitude: -83.629,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
