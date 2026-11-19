import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sunriseBouldering: ClimbingGym = {
  name: 'Sunrise Bouldering',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2',
    streetName: 'School St',
    city: 'Geneseo',
    state: 'NY',
    postalCode: '14454',
    country: 'USA',
    latitude: 42.796,
    longitude: -77.817,
  },
  amenities: amenities('bouldering'),
};
