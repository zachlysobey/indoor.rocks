import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const roseBlocLongueuil: ClimbingGym = {
  name: 'Rose Bloc Longueuil',
  description: 'Bouldering, open since 2024.',
  address: {
    streetNumber: '1100',
    streetName: 'Boul Marie-Victorin',
    city: 'Longueuil',
    region: 'QC',
    postalCode: 'J4G 2H9',
    country: 'CA',
    latitude: 45.548,
    longitude: -73.494,
  },
  amenities: amenities('bouldering', 'sauna', 'yoga'),
};
