import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const southernStone: ClimbingGym = {
  name: 'Southern Stone Indoor Climbing',
  website: 'https://southernstoneclimbing.com',
  description: 'Formerly Rok Haus.',
  address: {
    streetNumber: '109',
    streetName: 'Grand Ave',
    city: 'Lafayette',
    region: 'LA',
    postalCode: '70503',
    country: 'US',
    latitude: 30.205,
    longitude: -92.030,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
