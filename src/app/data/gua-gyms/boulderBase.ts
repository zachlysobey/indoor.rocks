import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boulderBase: ClimbingGym = {
  name: 'Boulder Base',
  website: 'https://www.boulderbasemx.com',
  address: {
    streetNumber: '44',
    streetName: 'Calle del Llano',
    city: 'San Miguel de Allende',
    region: 'GUA',
    postalCode: '',
    country: 'MX',
    latitude: 20.917,
    longitude: -100.741,
  },
  amenities: amenities('bouldering'),
};
