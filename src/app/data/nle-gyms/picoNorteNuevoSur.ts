import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { picoNorte } from "../companies/picoNorte";

export const picoNorteNuevoSur: ClimbingGym = {
  name: 'Pico Norte Nuevo Sur',
  parent: picoNorte,
  address: {
    streetNumber: '2703',
    streetName: 'Av. Revolución',
    city: 'Monterrey',
    region: 'NLE',
    postalCode: '64830',
    country: 'MX',
    latitude: 25.640,
    longitude: -100.281,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};
