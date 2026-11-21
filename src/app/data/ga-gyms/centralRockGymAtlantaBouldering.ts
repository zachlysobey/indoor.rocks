import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymAtlantaBouldering: ClimbingGym = {
  name: 'Central Rock Gym Atlanta Bouldering',
  website: 'https://centralrockgym.com',
  description: 'Bouldering only. Shares a parking lot with Central Rock Gym Atlanta.',
  parent: centralRockGym,
  address: {
    streetNumber: '3176',
    streetName: 'Marjan Dr',
    city: 'Doraville',
    state: 'GA',
    postalCode: '30340',
    country: 'USA',
    latitude: 33.891,
    longitude: -84.258,
  },
  amenities: amenities('bouldering'),
};
