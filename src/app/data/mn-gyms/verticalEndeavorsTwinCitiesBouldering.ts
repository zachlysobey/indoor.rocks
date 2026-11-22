import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalEndeavors } from "../companies/verticalEndeavors";

export const verticalEndeavorsTwinCitiesBouldering: ClimbingGym = {
  name: 'Vertical Endeavors Twin Cities Bouldering',
  website: 'https://www.verticalendeavors.com/visit-us/hours-locations/twin-cities-bouldering-4/',
  description: 'Bouldering only.',
  parent: verticalEndeavors,
  address: {
    streetNumber: '2550',
    streetName: 'Wabash Ave',
    city: 'St. Paul',
    state: 'MN',
    postalCode: '55114',
    country: 'USA',
    latitude: 44.964,
    longitude: -93.201,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
