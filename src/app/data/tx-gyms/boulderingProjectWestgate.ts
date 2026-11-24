import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectWestgate: ClimbingGym = {
  name: 'Bouldering Project Westgate',
  website: 'https://boulderingproject.com/location/westgate/',
  description: 'Bouldering only.',
  parent: boulderingProject,
  address: {
    streetNumber: '4477',
    streetName: 'S Lamar Blvd',
    city: 'Austin',
    region: 'TX',
    postalCode: '78745',
    country: 'US',
    latitude: 30.231,
    longitude: -97.795,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};
