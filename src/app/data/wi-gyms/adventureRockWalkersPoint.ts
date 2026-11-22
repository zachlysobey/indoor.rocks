import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { adventureRock } from "../companies/adventureRock";

export const adventureRockWalkersPoint: ClimbingGym = {
  name: "Adventure Rock Walker's Point",
  website: 'https://adventurerock.com',
  description: 'Bouldering only.',
  parent: adventureRock,
  address: {
    streetNumber: '613',
    streetName: 'S 2nd St',
    city: 'Milwaukee',
    state: 'WI',
    postalCode: '53204',
    country: 'USA',
    latitude: 43.025,
    longitude: -87.913,
  },
  amenities: amenities('bouldering', 'yoga'),
};
