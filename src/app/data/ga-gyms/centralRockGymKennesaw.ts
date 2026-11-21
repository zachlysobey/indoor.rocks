import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymKennesaw: ClimbingGym = {
  name: 'Central Rock Gym Kennesaw',
  website: 'https://centralrockgym.com/kennesaw/',
  description: 'Formerly Stone Summit.',
  parent: centralRockGym,
  address: {
    streetNumber: '2801',
    streetName: 'George Busbee Pkwy NW',
    city: 'Kennesaw',
    state: 'GA',
    postalCode: '30144',
    country: 'USA',
    latitude: 34.021,
    longitude: -84.575,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};
