import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { fitRocks } from "../companies/fitRocks";

export const fitRocksSaintJohn: ClimbingGym = {
  name: 'Fit Rocks Saint John',
  website: 'https://saintjohn.fitrocks.ca',
  description: 'Mostly bouldering, with an interactive wall.',
  parent: fitRocks,
  address: {
    streetNumber: '40',
    streetName: 'Ashburn Lake Rd, Unit 24',
    city: 'Saint John',
    region: 'NB',
    postalCode: 'E2J 5E2',
    country: 'CA',
    latitude: 45.309,
    longitude: -66.031,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};
