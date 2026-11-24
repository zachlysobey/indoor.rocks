import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const tableRockBouldering: ClimbingGym = {
  name: 'Table Rock Bouldering',
  description: 'Bouldering only.',
  address: {
    streetNumber: '6',
    streetName: 'Market St',
    city: 'Oneonta',
    region: 'NY',
    postalCode: '13820',
    country: 'US',
    latitude: 42.452,
    longitude: -75.061,
  },
  amenities: amenities('bouldering'),
};
