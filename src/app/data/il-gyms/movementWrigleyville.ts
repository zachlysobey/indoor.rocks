import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementWrigleyville: ClimbingGym = {
  name: 'Movement Wrigleyville',
  website: 'https://movementgyms.com/wrigleyville/',
  description: 'Bouldering-focused gym across from Wrigley Field.',
  parent: movement,
  address: {
    streetNumber: '1115',
    streetName: 'W Addison St',
    city: 'Chicago',
    state: 'IL',
    postalCode: '60613',
    country: 'USA',
    latitude: 41.947,
    longitude: -87.657,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga', 'sauna'),
};
