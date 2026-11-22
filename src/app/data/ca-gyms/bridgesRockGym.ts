import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bridgesRockGym: ClimbingGym = {
  name: 'Bridges Rock Gym',
  website: 'https://www.bridgesrockgym.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '5635',
    streetName: 'San Diego St',
    city: 'El Cerrito',
    state: 'CA',
    postalCode: '94530',
    country: 'USA',
    latitude: 37.905,
    longitude: -122.303,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
