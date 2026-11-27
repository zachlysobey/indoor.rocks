import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { picoNorte } from "../companies/picoNorte";

export const picoNorteSanPedro: ClimbingGym = {
  name: 'Pico Norte San Pedro',
  parent: picoNorte,
  address: {
    streetNumber: '326',
    streetName: 'Lic. Benito Juárez Nte.',
    city: 'San Pedro Garza García',
    region: 'NLE',
    postalCode: '66230',
    country: 'MX',
    latitude: 25.658,
    longitude: -100.403,
  },
  amenities: amenities('bouldering'),
};
