import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymArsenalYards: ClimbingGym = {
  name: 'Central Rock Gym Arsenal Yards',
  website: 'https://centralrockgym.com/arsenalyards/',
  description: 'Rope climbing, inside the Arsenal Yards development.',
  parent: centralRockGym,
  address: {
    streetNumber: '87',
    streetName: 'Arsenal Yards Blvd',
    city: 'Watertown',
    region: 'MA',
    postalCode: '02472',
    country: 'US',
    latitude: 42.362,
    longitude: -71.159,
  },
  amenities: amenities('top-rope', 'lead', 'auto-belays', 'yoga'),
};
