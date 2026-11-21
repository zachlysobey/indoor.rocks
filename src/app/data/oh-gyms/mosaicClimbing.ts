import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const mosaicClimbing: ClimbingGym = {
  name: 'Mosaic Climbing',
  address: {
    streetNumber: '9501',
    streetName: 'Union Cemetery Rd',
    city: 'Loveland',
    state: 'OH',
    postalCode: '45140',
    country: 'USA',
    latitude: 39.270,
    longitude: -84.310,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
