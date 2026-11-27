import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocksGym: ClimbingGym = {
  name: 'Rock\'s Gym',
  address: {
    streetNumber: 'Km 1+037',
    streetName: 'Paseo Centenario del Ejército Mexicano',
    city: 'Querétaro',
    region: 'QUE',
    postalCode: '76267',
    country: 'MX',
    latitude: 20.606,
    longitude: -100.432,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
