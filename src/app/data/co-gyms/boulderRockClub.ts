import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boulderRockClub: ClimbingGym = {
  name: 'Boulder Rock Club',
  website: 'https://boulderrockclub.com/',
  address: {
    streetNumber: '2829',
    streetName: 'Mapleton Ave',
    city: 'Boulder',
    state: 'CO',
    postalCode: '80301',
    country: 'USA',
    latitude: 40.020,
    longitude: -105.258,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};
