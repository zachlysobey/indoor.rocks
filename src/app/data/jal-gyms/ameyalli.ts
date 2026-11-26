import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ameyalli: ClimbingGym = {
  name: 'Ameyalli',
  address: {
    streetNumber: '3050',
    streetName: '12 de Diciembre',
    city: 'Guadalajara',
    region: 'JAL',
    postalCode: '44500',
    country: 'MX',
    latitude: 20.666,
    longitude: -103.401,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights'),
};
