import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rappRocksClimbingGym: ClimbingGym = {
  name: 'Rapp Rocks Climbing Gym',
  address: {
    streetNumber: '11050',
    streetName: 'Pierson Dr',
    city: 'Fredericksburg',
    region: 'VA',
    postalCode: '22408',
    country: 'US',
    latitude: 38.258,
    longitude: -77.447,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};
