import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const blocHaven: ClimbingGym = {
  name: 'BlocHaven',
  description: 'In Judson Mill.',
  address: {
    streetNumber: '701',
    streetName: 'Easley Bridge Rd',
    city: 'Greenville',
    state: 'SC',
    postalCode: '29611',
    country: 'USA',
    latitude: 34.844,
    longitude: -82.425,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
