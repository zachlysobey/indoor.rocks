import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const betaBloc: ClimbingGym = {
  name: 'Beta Bloc',
  website: 'https://betabloc.ca',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2180',
    streetName: 'Boul Hymus',
    city: 'Dorval',
    region: 'QC',
    postalCode: 'H9P 1J7',
    country: 'CA',
    latitude: 45.470,
    longitude: -73.745,
  },
  amenities: amenities('bouldering'),
};
