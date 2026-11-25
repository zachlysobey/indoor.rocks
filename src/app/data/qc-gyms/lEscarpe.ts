import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const lEscarpe: ClimbingGym = {
  name: "L'Escarpé",
  description: 'Bouldering only.',
  address: {
    streetNumber: '2250',
    streetName: 'Rue Demers',
    city: 'Drummondville',
    region: 'QC',
    postalCode: 'J2B 1V2',
    country: 'CA',
    latitude: 45.875,
    longitude: -72.483,
  },
  amenities: amenities('bouldering'),
};
