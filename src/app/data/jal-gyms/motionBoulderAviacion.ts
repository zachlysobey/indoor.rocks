import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { motionBoulder } from "../companies/motionBoulder";

export const motionBoulderAviacion: ClimbingGym = {
  name: 'Motion Boulder Aviación',
  parent: motionBoulder,
  address: {
    streetNumber: '9345',
    streetName: 'Av. Inglaterra',
    city: 'Zapopan',
    region: 'JAL',
    postalCode: '',
    country: 'MX',
    latitude: 20.678,
    longitude: -103.445,
  },
  amenities: amenities('bouldering'),
};
