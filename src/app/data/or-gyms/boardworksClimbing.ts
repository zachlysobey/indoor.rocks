import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boardworksClimbing: ClimbingGym = {
  name: 'Boardworks Climbing',
  website: 'https://www.boardworksclimbing.com/',
  description: 'Adults-only training-board gym open 24/7 to members and punch-pass holders.',
  address: {
    streetNumber: '222',
    streetName: 'SE Reed Market Rd',
    city: 'Bend',
    state: 'OR',
    postalCode: '97702',
    country: 'USA',
    latitude: 44.040,
    longitude: -121.311,
  },
  amenities: amenities('bouldering', 'machines', 'free-weights', 'sauna'),
};
