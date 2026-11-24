import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectSpringdale: ClimbingGym = {
  name: 'Bouldering Project Springdale',
  website: 'https://boulderingproject.com/location/springdale/',
  description: 'Bouldering only.',
  parent: boulderingProject,
  address: {
    streetNumber: '979',
    streetName: 'Springdale Rd',
    city: 'Austin',
    region: 'TX',
    postalCode: '78702',
    country: 'US',
    latitude: 30.265,
    longitude: -97.693,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga', 'sauna'),
};
