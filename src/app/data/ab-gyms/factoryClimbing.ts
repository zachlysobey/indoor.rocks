import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockJungleClimbing } from "../companies/rockJungleClimbing";

export const factoryClimbing: ClimbingGym = {
  name: 'Factory Climbing',
  description: 'Formerly Rock Jungle Fitness.',
  parent: rockJungleClimbing,
  address: {
    streetNumber: '10247',
    streetName: '184 St NW',
    city: 'Edmonton',
    region: 'AB',
    postalCode: 'T5S 2J4',
    country: 'CA',
    latitude: 53.546,
    longitude: -113.633,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
