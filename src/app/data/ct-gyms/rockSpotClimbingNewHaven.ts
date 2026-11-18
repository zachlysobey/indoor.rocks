import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingNewHaven: ClimbingGym = {
  name: 'Rock Spot Climbing New Haven',
  website: 'https://rockspotclimbing.com/locations/ct/newhaven/',
  parent: rockSpot,
  address: {
    streetNumber: '44',
    streetName: 'Olive St',
    city: 'New Haven',
    state: 'CT',
    postalCode: '06511',
    country: 'USA',
    latitude: 41.303,
    longitude: -72.921,
  },
  amenities: amenities('bouldering', 'yoga'),
};
