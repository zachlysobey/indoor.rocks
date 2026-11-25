import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const lAccroche: ClimbingGym = {
  name: "L'Accroché",
  address: {
    streetNumber: '345',
    streetName: 'Rue Aubert',
    city: 'Lévis',
    region: 'QC',
    postalCode: 'G6C',
    country: 'CA',
    latitude: 46.771,
    longitude: -71.142,
  },
  amenities: amenities('bouldering'),
};
