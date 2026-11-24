import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const straitUpClimbing: ClimbingGym = {
  name: 'Strait Up Climbing',
  address: {
    streetNumber: '5590',
    streetName: 'Wharf Ave, Unit 104',
    city: 'Sechelt',
    region: 'BC',
    postalCode: 'V7Z 0P6',
    country: 'CA',
    latitude: 49.473,
    longitude: -123.756,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
