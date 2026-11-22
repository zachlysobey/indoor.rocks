import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { hangar18 } from "../companies/hangar18";

export const hangar18MissionViejo: ClimbingGym = {
  name: 'Hangar 18 Mission Viejo',
  website: 'https://climbhangar18.com/mission-viejo/',
  description: 'Bouldering gym.',
  parent: hangar18,
  address: {
    streetNumber: '23812',
    streetName: 'Via Fabricante',
    city: 'Mission Viejo',
    state: 'CA',
    postalCode: '92691',
    country: 'USA',
    latitude: 33.627,
    longitude: -117.681,
  },
  amenities: amenities('bouldering'),
};
