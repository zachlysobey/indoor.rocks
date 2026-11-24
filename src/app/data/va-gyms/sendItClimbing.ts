import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sendItClimbing: ClimbingGym = {
  name: 'Send It Climbing',
  address: {
    streetNumber: '7405',
    streetName: 'Sewells Point Rd',
    city: 'Norfolk',
    region: 'VA',
    postalCode: '23513',
    country: 'US',
    latitude: 36.899,
    longitude: -76.233,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
