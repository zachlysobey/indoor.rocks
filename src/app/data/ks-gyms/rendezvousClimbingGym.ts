import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rendezvousClimbingGym: ClimbingGym = {
  name: 'Rendezvous Climbing Gym',
  website: 'https://www.rendezvouskc.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '13124',
    streetName: 'State Line Rd',
    city: 'Leawood',
    state: 'KS',
    postalCode: '66209',
    country: 'USA',
    latitude: 38.886,
    longitude: -94.608,
  },
  amenities: amenities('bouldering'),
};
