import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theSpot } from "../companies/theSpot";

export const theSpotDenver: ClimbingGym = {
  name: 'The Spot Denver',
  website: 'https://www.thespotgym.com/locations/denver/',
  description: 'Bouldering gym.',
  parent: theSpot,
  address: {
    streetNumber: '1235',
    streetName: 'Delaware St',
    city: 'Denver',
    region: 'CO',
    postalCode: '80204',
    country: 'US',
    latitude: 39.736,
    longitude: -104.992,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
