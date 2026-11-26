import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const inerciaSalaDeEscalada: ClimbingGym = {
  name: 'Inercia Sala de Escalada',
  address: {
    streetNumber: '156',
    streetName: 'Av. Guanajuato',
    city: 'Tuxtla Gutiérrez',
    region: 'CHP',
    postalCode: '29020',
    country: 'MX',
    latitude: 16.758,
    longitude: -93.143,
  },
  amenities: amenities(),
};
