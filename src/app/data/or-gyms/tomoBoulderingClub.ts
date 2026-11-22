import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const tomoBoulderingClub: ClimbingGym = {
  name: 'Tomo Bouldering Club',
  website: 'https://www.tomoboulderingclub.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1315',
    streetName: 'NW Overton St',
    city: 'Portland',
    state: 'OR',
    postalCode: '97209',
    country: 'USA',
    latitude: 45.532,
    longitude: -122.685,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
