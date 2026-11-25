import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gripIt } from "../companies/gripIt";

export const gripItNelson: ClimbingGym = {
  name: 'Grip It Nelson',
  description: 'Bouldering and auto-belays, with a weight room and Kilter Board.',
  parent: gripIt,
  address: {
    streetNumber: '431',
    streetName: 'Nelson Rd',
    city: 'Saskatoon',
    region: 'SK',
    postalCode: 'S7S 1P2',
    country: 'CA',
    latitude: 52.164,
    longitude: -106.586,
  },
  amenities: amenities('bouldering', 'auto-belays', 'free-weights'),
};
