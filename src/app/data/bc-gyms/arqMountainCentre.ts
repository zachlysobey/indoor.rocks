import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const arqMountainCentre: ClimbingGym = {
  name: 'Arq Mountain Centre',
  address: {
    streetNumber: '1924',
    streetName: 'Industrial Rd 2',
    city: 'Cranbrook',
    state: 'BC',
    postalCode: 'V1C 6R2',
    country: 'Canada',
    latitude: 49.520,
    longitude: -115.745,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
