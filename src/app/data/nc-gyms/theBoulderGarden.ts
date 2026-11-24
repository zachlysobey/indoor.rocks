import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBoulderGarden: ClimbingGym = {
  name: 'The Boulder Garden',
  description: 'Bouldering only.',
  address: {
    streetNumber: '328',
    streetName: 'Roney St',
    city: 'Durham',
    region: 'NC',
    postalCode: '27701',
    country: 'US',
    latitude: 36.000,
    longitude: -78.905,
  },
  amenities: amenities('bouldering'),
};
