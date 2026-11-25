import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const dVert: ClimbingGym = {
  name: 'D-Vert',
  description: 'Climbing, a gym and group classes.',
  address: {
    streetNumber: '50',
    streetName: 'Ch de la Plage-des-Cantons',
    city: 'Magog',
    region: 'QC',
    postalCode: 'J1X',
    country: 'CA',
    latitude: 45.276,
    longitude: -72.177,
  },
  amenities: amenities('bouldering', 'yoga'),
};
