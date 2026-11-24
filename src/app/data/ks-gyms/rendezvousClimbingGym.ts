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
    region: 'KS',
    postalCode: '66209',
    country: 'US',
    latitude: 38.886,
    longitude: -94.608,
  },
  amenities: amenities('bouldering'),
};
