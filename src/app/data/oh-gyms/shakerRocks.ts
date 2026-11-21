import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const shakerRocks: ClimbingGym = {
  name: 'Shaker Rocks',
  address: {
    streetNumber: '3377',
    streetName: 'Warrensville Center Rd',
    city: 'Shaker Heights',
    state: 'OH',
    postalCode: '44122',
    country: 'USA',
    latitude: 41.469,
    longitude: -81.537,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
