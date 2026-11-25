import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cafeBloc: ClimbingGym = {
  name: 'Café Bloc',
  website: 'https://cafebloc.com',
  description: 'Bouldering, with a workout area.',
  address: {
    streetNumber: '1209',
    streetName: 'Boul Saint-Laurent',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H2X 2S6',
    country: 'CA',
    latitude: 45.510,
    longitude: -73.563,
  },
  amenities: amenities('bouldering', 'sauna'),
};
