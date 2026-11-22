import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const steepworld: ClimbingGym = {
  name: 'Steepworld Climbing & Fitness',
  address: {
    streetNumber: '1230',
    streetName: 'S 31st St W',
    city: 'Billings',
    state: 'MT',
    postalCode: '59102',
    country: 'USA',
    latitude: 45.757,
    longitude: -108.585,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
