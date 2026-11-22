import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const horizonClimbing: ClimbingGym = {
  name: 'Horizon Climbing',
  website: 'https://climbhorizon.com/',
  description: "Bouldering gym with kids' rooms, sauna and co-working lobby.",
  address: {
    streetNumber: '1914',
    streetName: 'Round Barn Rd',
    city: 'Champaign',
    state: 'IL',
    postalCode: '61821',
    country: 'USA',
    latitude: 40.113,
    longitude: -88.287,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga', 'sauna'),
};
