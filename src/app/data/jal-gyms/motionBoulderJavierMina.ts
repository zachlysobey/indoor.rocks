import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { motionBoulder } from "../companies/motionBoulder";

export const motionBoulderJavierMina: ClimbingGym = {
  name: 'Motion Boulder Javier Mina',
  description: 'Bouldering, with a MoonBoard and spray wall.',
  parent: motionBoulder,
  address: {
    streetNumber: '84',
    streetName: 'Javier Mina',
    city: 'Zapopan',
    region: 'JAL',
    postalCode: '45100',
    country: 'MX',
    latitude: 20.713,
    longitude: -103.384,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
