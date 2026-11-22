import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theSpot } from "../companies/theSpot";

export const theSpotLouisville: ClimbingGym = {
  name: 'The Spot Louisville',
  website: 'https://www.thespotgym.com/locations/louisville/',
  parent: theSpot,
  address: {
    streetNumber: '1754',
    streetName: 'Dogwood St',
    city: 'Louisville',
    state: 'CO',
    postalCode: '80027',
    country: 'USA',
    latitude: 39.967,
    longitude: -105.121,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};
