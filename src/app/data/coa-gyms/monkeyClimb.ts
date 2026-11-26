import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const monkeyClimb: ClimbingGym = {
  name: 'Monkey Climb',
  address: {
    streetNumber: '541',
    streetName: 'Sor Juana Inés de la Cruz',
    city: 'Saltillo',
    region: 'COA',
    postalCode: '25298',
    country: 'MX',
    latitude: 25.443,
    longitude: -100.985,
  },
  amenities: amenities(),
};
