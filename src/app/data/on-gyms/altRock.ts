import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const altRock: ClimbingGym = {
  name: 'Alt. Rock',
  website: 'https://altrock.co',
  address: {
    streetNumber: '445',
    streetName: 'Dunlop St W',
    city: 'Barrie',
    region: 'ON',
    postalCode: 'L4N 1C3',
    country: 'CA',
    latitude: 44.381,
    longitude: -79.724,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
