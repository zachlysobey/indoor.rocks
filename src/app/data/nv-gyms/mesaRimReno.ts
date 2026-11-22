import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { mesaRim } from "../companies/mesaRim";

export const mesaRimReno: ClimbingGym = {
  name: 'Mesa Rim Reno',
  website: 'https://mesarim.com/reno',
  parent: mesaRim,
  address: {
    streetNumber: '970',
    streetName: 'Harvard Way',
    city: 'Reno',
    state: 'NV',
    postalCode: '89502',
    country: 'USA',
    latitude: 39.505,
    longitude: -119.788,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
