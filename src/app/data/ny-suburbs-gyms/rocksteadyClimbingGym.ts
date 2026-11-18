import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rocksteadyClimbingGym: ClimbingGym = {
  name: 'Rocksteady Climbing Gym',
  website: 'https://www.rocksteadyclimb.com/',
  description: 'Entrance at the rear of the building.',
  address: {
    streetNumber: '4016',
    streetName: 'Nesconset Hwy',
    city: 'Setauket',
    state: 'NY',
    postalCode: '11733',
    country: 'USA',
    latitude: 40.904,
    longitude: -73.075,
  },
  amenities: amenities('bouldering', 'yoga'),
};
