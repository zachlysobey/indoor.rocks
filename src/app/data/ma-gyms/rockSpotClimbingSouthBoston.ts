import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingSouthBoston: ClimbingGym = {
  name: 'Rock Spot Climbing South Boston',
  website: 'https://rockspotclimbing.com/locations/ma/southboston/',
  parent: rockSpot,
  address: {
    streetNumber: '30',
    streetName: 'Old Colony Ave',
    city: 'Boston',
    state: 'MA',
    postalCode: '02127',
    country: 'USA',
    latitude: 42.337,
    longitude: -71.057,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};
