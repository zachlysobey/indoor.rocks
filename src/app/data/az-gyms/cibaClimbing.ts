import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cibaClimbing: ClimbingGym = {
  name: 'Ciba Climbing',
  website: 'https://cibaclimbing.com/',
  description: 'Bouldering only. Open to the public on weekends; members and appointments on weekdays.',
  address: {
    streetNumber: '4066',
    streetName: 'E Monsanto Dr',
    city: 'Sierra Vista',
    state: 'AZ',
    postalCode: '85650',
    country: 'USA',
    latitude: 31.546,
    longitude: -110.240,
  },
  amenities: amenities('bouldering'),
};
