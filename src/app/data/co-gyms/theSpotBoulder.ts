import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theSpot } from "../companies/theSpot";

export const theSpotBoulder: ClimbingGym = {
  name: 'The Spot Boulder',
  website: 'https://www.thespotgym.com/locations/boulder/',
  description: 'Bouldering gym.',
  parent: theSpot,
  address: {
    streetNumber: '3240',
    streetName: 'Prairie Ave',
    city: 'Boulder',
    region: 'CO',
    postalCode: '80301',
    country: 'US',
    latitude: 40.022,
    longitude: -105.250,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
