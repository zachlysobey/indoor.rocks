import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbIowa } from "../companies/climbIowa";

export const climbIowaEastVillage: ClimbingGym = {
  name: 'Climb Iowa East Village',
  parent: climbIowa,
  description: 'Bouldering only.',
  address: {
    streetNumber: '150',
    streetName: 'E 4th St',
    city: 'Des Moines',
    state: 'IA',
    postalCode: '50309',
    country: 'USA',
    latitude: 41.588,
    longitude: -93.613,
  },
  amenities: amenities('bouldering'),
};
