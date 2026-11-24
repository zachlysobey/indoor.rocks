import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderz } from "../companies/boulderz";

export const boulderzEtobicoke: ClimbingGym = {
  name: 'Boulderz Etobicoke',
  parent: boulderz,
  address: {
    streetNumber: '80',
    streetName: 'The East Mall, Unit 9',
    city: 'Etobicoke',
    region: 'ON',
    postalCode: 'M8Z 5X1',
    country: 'CA',
    latitude: 43.620,
    longitude: -79.555,
  },
  amenities: amenities('bouldering'),
};
