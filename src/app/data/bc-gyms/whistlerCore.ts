import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const whistlerCore: ClimbingGym = {
  name: 'Whistler Core',
  description: 'A fitness club with a climbing gym.',
  address: {
    streetNumber: '4010',
    streetName: 'Whistler Way',
    city: 'Whistler',
    region: 'BC',
    postalCode: 'V8E 1G9',
    country: 'CA',
    latitude: 50.115,
    longitude: -122.955,
  },
  amenities: amenities('top-rope', 'auto-belays', 'free-weights', 'machines'),
};
