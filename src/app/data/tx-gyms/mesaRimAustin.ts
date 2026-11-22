import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { mesaRim } from "../companies/mesaRim";

export const mesaRimAustin: ClimbingGym = {
  name: 'Mesa Rim Austin',
  website: 'https://www.mesarim.com/austin',
  parent: mesaRim,
  address: {
    streetNumber: '1205',
    streetName: 'Sheldon Cove',
    city: 'Austin',
    state: 'TX',
    postalCode: '78753',
    country: 'USA',
    latitude: 30.371,
    longitude: -97.687,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
