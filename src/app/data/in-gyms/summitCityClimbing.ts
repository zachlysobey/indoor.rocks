import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const summitCityClimbing: ClimbingGym = {
  name: 'Summit City Climbing Co.',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1331',
    streetName: 'E Berry St',
    city: 'Fort Wayne',
    state: 'IN',
    postalCode: '46803',
    country: 'USA',
    latitude: 41.079,
    longitude: -85.122,
  },
  amenities: amenities('bouldering'),
};
