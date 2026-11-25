import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const oBlocEscalade: ClimbingGym = {
  name: "O'Bloc Escalade",
  description: 'Bouldering only.',
  address: {
    streetNumber: '645',
    streetName: 'Rue Dufferin',
    city: 'Granby',
    region: 'QC',
    postalCode: 'J2H 0Y7',
    country: 'CA',
    latitude: 45.426,
    longitude: -72.716,
  },
  amenities: amenities('bouldering'),
};
