import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const castleClimbingClub: ClimbingGym = {
  name: 'Castle Climbing Club',
  website: 'https://www.castleclimbingclub.com/',
  description: "Bouldering club with a wood-fired sauna garden and a spinning 'Rolling Pin' boulder.",
  address: {
    streetNumber: '6327',
    streetName: 'W Marginal Way SW',
    city: 'Seattle',
    region: 'WA',
    postalCode: '98106',
    country: 'US',
    latitude: 47.547,
    longitude: -122.351,
  },
  amenities: amenities('bouldering', 'sauna', 'free-weights', 'machines', 'yoga'),
};
