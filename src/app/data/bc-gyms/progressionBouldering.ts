import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const progressionBouldering: ClimbingGym = {
  name: 'Progression Bouldering',
  website: 'https://www.progressionbouldering.com',
  description: 'Bouldering only, with a café and a physio clinic.',
  address: {
    streetNumber: '275',
    streetName: 'E 10th Ave',
    city: 'Vancouver',
    state: 'BC',
    postalCode: 'V5T 4V1',
    country: 'Canada',
    latitude: 49.262,
    longitude: -123.099,
  },
  amenities: amenities('bouldering'),
};
