import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const yeEscaladaYogaCenter: ClimbingGym = {
  name: 'YE Escalada + Yoga Center',
  address: {
    streetNumber: '3000A',
    streetName: 'Av. Periférico Pte. Manuel Gómez Morín',
    city: 'Zapopan',
    region: 'JAL',
    postalCode: '45069',
    country: 'MX',
    latitude: 20.614,
    longitude: -103.433,
  },
  amenities: amenities('yoga'),
};
