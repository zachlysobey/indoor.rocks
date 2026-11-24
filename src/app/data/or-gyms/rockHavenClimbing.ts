import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockHavenClimbing: ClimbingGym = {
  name: 'Rock Haven Climbing',
  website: 'https://www.rockhavenclimbing.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '355',
    streetName: 'NE 223rd Ave',
    city: 'Gresham',
    region: 'OR',
    postalCode: '97030',
    country: 'US',
    latitude: 45.526,
    longitude: -122.430,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines'),
};
