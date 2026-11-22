import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theSpot } from "../companies/theSpot";

export const theSpotGolden: ClimbingGym = {
  name: 'The Spot Golden',
  website: 'https://www.thespotgym.com/locations/golden/',
  description: 'Bouldering gym.',
  parent: theSpot,
  address: {
    streetNumber: '1391',
    streetName: 'Brickyard Rd',
    city: 'Golden',
    state: 'CO',
    postalCode: '80403',
    country: 'USA',
    latitude: 39.769,
    longitude: -105.222,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};
