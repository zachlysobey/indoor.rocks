import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const alaskaRockGym: ClimbingGym = {
  name: 'Alaska Rock Gym',
  website: 'https://www.alaskarockgym.com',
  address: {
    streetNumber: '665',
    streetName: 'E 33rd Ave',
    city: 'Anchorage',
    state: 'AK',
    postalCode: '99503',
    country: 'USA',
    latitude: 61.190,
    longitude: -149.872,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};
