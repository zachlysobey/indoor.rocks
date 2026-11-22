import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { mesaRim } from "../companies/mesaRim";

export const mesaRimMiraMesa: ClimbingGym = {
  name: 'Mesa Rim Mira Mesa',
  website: 'https://mesarim.com/miramesa',
  parent: mesaRim,
  address: {
    streetNumber: '10110',
    streetName: 'Mesa Rim Rd',
    city: 'San Diego',
    state: 'CA',
    postalCode: '92121',
    country: 'USA',
    latitude: 32.901,
    longitude: -117.196,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'sauna'),
};
