import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const aiguille: ClimbingGym = {
  name: 'Aiguille Rock Climbing Center',
  address: {
    streetNumber: '830',
    streetName: 'S Ronald Reagan Blvd',
    city: 'Longwood',
    region: 'FL',
    postalCode: '32750',
    country: 'US',
    latitude: 28.690,
    longitude: -81.338,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
