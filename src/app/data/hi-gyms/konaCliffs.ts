import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const konaCliffs: ClimbingGym = {
  name: 'Kona Cliffs',
  description: 'Bouldering only.',
  address: {
    streetNumber: '74-5617',
    streetName: 'Pawai Pl',
    city: 'Kailua-Kona',
    state: 'HI',
    postalCode: '96740',
    country: 'USA',
    latitude: 19.651,
    longitude: -155.996,
  },
  amenities: amenities('bouldering'),
};
