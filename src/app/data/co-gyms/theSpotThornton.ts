import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theSpot } from "../companies/theSpot";

export const theSpotThornton: ClimbingGym = {
  name: 'The Spot Thornton',
  website: 'https://www.thespotgym.com/locations/thornton/',
  parent: theSpot,
  address: {
    streetNumber: '9499',
    streetName: 'Washington St',
    city: 'Thornton',
    region: 'CO',
    postalCode: '80229',
    country: 'US',
    latitude: 39.867,
    longitude: -104.977,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};
