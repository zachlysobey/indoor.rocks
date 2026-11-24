import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const quartziteClimbing: ClimbingGym = {
  name: 'Quartzite Climbing',
  description: 'Bouldering only.',
  address: {
    streetNumber: '733',
    streetName: 'BC-23',
    city: 'Revelstoke',
    state: 'BC',
    postalCode: 'V0E 2S0',
    country: 'Canada',
    latitude: 50.991,
    longitude: -118.181,
  },
  amenities: amenities('bouldering'),
};
