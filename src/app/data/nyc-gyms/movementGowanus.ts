import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementGowanus: ClimbingGym = {
  name: 'Movement Gowanus',
  website: 'https://movementgyms.com/gowanus/',
  parent: movement,
  address: {
    streetNumber: '242',
    streetName: 'Butler St',
    city: 'Brooklyn',
    region: 'NY',
    postalCode: '11217',
    country: 'US',
    latitude: 40.682,
    longitude: -73.986,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'sauna'),
};
