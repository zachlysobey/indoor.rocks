import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const volcanicRockGym: ClimbingGym = {
  name: 'Volcanic Rock Gym',
  description: 'Bouldering and training boards.',
  address: {
    streetNumber: '161',
    streetName: 'Hamakua Dr',
    city: 'Kailua',
    region: 'HI',
    postalCode: '96734',
    country: 'US',
    latitude: 21.395,
    longitude: -157.742,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
