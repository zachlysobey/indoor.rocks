import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rocksAndRopes } from "../companies/rocksAndRopes";

export const theBloc: ClimbingGym = {
  name: 'The BLOC',
  website: 'https://rocksandropes.com/thebloc',
  description: 'Bouldering gym with an auto-belay area and a fitness floor.',
  parent: rocksAndRopes,
  address: {
    streetNumber: '8975',
    streetName: 'E Tanque Verde Rd',
    city: 'Tucson',
    region: 'AZ',
    postalCode: '85749',
    country: 'US',
    latitude: 32.268,
    longitude: -110.794,
  },
  amenities: amenities('bouldering', 'auto-belays', 'machines', 'yoga'),
};
