import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const onTheEdgeMelbourne: ClimbingGym = {
  name: 'On The Edge Rock Climbing Gym',
  address: {
    streetNumber: '200',
    streetName: 'West Dr',
    city: 'Melbourne',
    state: 'FL',
    postalCode: '32904',
    country: 'USA',
    latitude: 28.083,
    longitude: -80.680,
  },
  amenities: amenities(),
};
