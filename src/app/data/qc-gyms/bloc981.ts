import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bloc981: ClimbingGym = {
  name: 'Bloc 9.81',
  description: 'Bouldering only.',
  address: {
    streetNumber: '79',
    streetName: 'Boul de la Gappe',
    city: 'Gatineau',
    region: 'QC',
    postalCode: 'J8T 0B5',
    country: 'CA',
    latitude: 45.479,
    longitude: -75.660,
  },
  amenities: amenities('bouldering'),
};
