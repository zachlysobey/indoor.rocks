import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const klimatOttawa: ClimbingGym = {
  name: 'Klimat 2.0',
  description: 'Bouldering, with a fitness centre and café.',
  address: {
    streetNumber: '265',
    streetName: 'City Centre Ave',
    city: 'Ottawa',
    region: 'ON',
    postalCode: 'K1R',
    country: 'CA',
    latitude: 45.409,
    longitude: -75.717,
  },
  amenities: amenities('bouldering'),
};
