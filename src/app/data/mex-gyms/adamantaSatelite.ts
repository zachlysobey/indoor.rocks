import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adamanta } from "../companies/adamanta";

export const adamantaSatelite: ClimbingGym = {
  name: 'Adamanta Satélite',
  description: 'Bouldering and roped walls up to 15 m, with a Kilter Board.',
  parent: adamanta,
  address: {
    streetNumber: '3023',
    streetName: 'Perif. Blvd. Manuel Ávila Camacho',
    city: 'Naucalpan de Juárez',
    region: 'MEX',
    postalCode: '53160',
    country: 'MX',
    latitude: 19.498,
    longitude: -99.233,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights', 'yoga'),
};
