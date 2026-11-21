import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const adrenalineClimbing: ClimbingGym = {
  name: 'Adrenaline Climbing',
  address: {
    streetNumber: '460',
    streetName: 'Brogdon Rd',
    city: 'Suwanee',
    state: 'GA',
    postalCode: '30024',
    country: 'USA',
    latitude: 34.040,
    longitude: -84.060,
  },
  amenities: amenities('top-rope'),
};
