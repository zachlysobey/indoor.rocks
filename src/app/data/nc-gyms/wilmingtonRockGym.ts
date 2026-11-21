import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const wilmingtonRockGym: ClimbingGym = {
  name: 'Wilmington Rock Gym',
  address: {
    streetNumber: '8118',
    streetName: 'Market St',
    city: 'Wilmington',
    state: 'NC',
    postalCode: '28411',
    country: 'USA',
    latitude: 34.295,
    longitude: -77.800,
  },
  amenities: amenities('bouldering', 'top-rope'),
};
