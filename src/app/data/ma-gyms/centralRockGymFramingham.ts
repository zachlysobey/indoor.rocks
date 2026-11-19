import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymFramingham: ClimbingGym = {
  name: 'Central Rock Gym Framingham',
  website: 'https://centralrockgym.com/framingham/',
  description: 'Bouldering only.',
  parent: centralRockGym,
  address: {
    streetNumber: '1451',
    streetName: 'Concord St',
    city: 'Framingham',
    state: 'MA',
    postalCode: '01701',
    country: 'USA',
    latitude: 42.318,
    longitude: -71.398,
  },
  amenities: amenities('bouldering', 'yoga'),
};
