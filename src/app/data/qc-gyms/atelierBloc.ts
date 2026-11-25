import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const atelierBloc: ClimbingGym = {
  name: 'Atelier Bloc',
  website: 'https://www.atelierbloc.ca',
  description: 'Bouldering, with a Kilter Board and a training gym. Opened in October 2025.',
  address: {
    streetNumber: '4370',
    streetName: 'Boul Royal',
    city: 'Shawinigan',
    region: 'QC',
    postalCode: 'G9N 7X7',
    country: 'CA',
    latitude: 46.520,
    longitude: -72.730,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
