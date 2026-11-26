import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const deltaClimbing: ClimbingGym = {
  name: 'Delta Climbing',
  address: {
    streetNumber: '4310',
    streetName: 'Nueva Escocia',
    city: 'Monterrey',
    region: 'NLE',
    postalCode: '64310',
    country: 'MX',
    latitude: 25.727,
    longitude: -100.372,
  },
  amenities: amenities(),
};
