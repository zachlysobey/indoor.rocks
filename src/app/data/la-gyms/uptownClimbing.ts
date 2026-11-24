import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const uptownClimbing: ClimbingGym = {
  name: 'UpTown Climbing',
  address: {
    streetNumber: '10505',
    streetName: 'Coursey Blvd',
    city: 'Baton Rouge',
    region: 'LA',
    postalCode: '70816',
    country: 'US',
    latitude: 30.405,
    longitude: -91.065,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
