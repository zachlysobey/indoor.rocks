import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const nevadaClimbingCenter: ClimbingGym = {
  name: 'Nevada Climbing Center',
  website: 'https://www.nevadaclimbingcenters.com',
  description: "Las Vegas's oldest climbing gym.",
  address: {
    streetNumber: '3065',
    streetName: 'E Patrick Ln',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89120',
    country: 'US',
    latitude: 36.078,
    longitude: -115.112,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'aerial-silks'),
};
