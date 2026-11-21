import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const escaladeKennesaw: ClimbingGym = {
  name: 'Escalade Rock Climbing Kennesaw',
  address: {
    streetNumber: '3694',
    streetName: 'Kennesaw South Industrial Dr NW',
    city: 'Kennesaw',
    state: 'GA',
    postalCode: '30144',
    country: 'USA',
    latitude: 34.000,
    longitude: -84.590,
  },
  amenities: amenities('bouldering'),
};
