import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rikiBloc: ClimbingGym = {
  name: 'Riki Bloc',
  description: 'A climbing co-op.',
  address: {
    streetNumber: '547',
    streetName: 'Rue Saint-Germain',
    city: 'Rimouski',
    region: 'QC',
    postalCode: 'G5L 1G2',
    country: 'CA',
    latitude: 48.475,
    longitude: -68.511,
  },
  amenities: amenities('bouldering'),
};
