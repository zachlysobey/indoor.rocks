import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementLincolnPark: ClimbingGym = {
  name: 'Movement Lincoln Park',
  website: 'https://movementgyms.com/lincoln-park/',
  parent: movement,
  address: {
    streetNumber: '1460',
    streetName: 'N Dayton St',
    city: 'Chicago',
    state: 'IL',
    postalCode: '60642',
    country: 'USA',
    latitude: 41.908,
    longitude: -87.650,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};
