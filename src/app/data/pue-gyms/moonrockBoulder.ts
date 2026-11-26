import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const moonrockBoulder: ClimbingGym = {
  name: 'Moonrock Boulder',
  description: 'Bouldering, with a spray wall.',
  address: {
    streetNumber: '426',
    streetName: 'Calle 6 Ote.',
    city: 'San Andrés Cholula',
    region: 'PUE',
    postalCode: '72810',
    country: 'MX',
    latitude: 19.052,
    longitude: -98.299,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
