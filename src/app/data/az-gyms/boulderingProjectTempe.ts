import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectTempe: ClimbingGym = {
  name: 'Bouldering Project Tempe',
  website: 'https://boulderingproject.com/location/tempe',
  parent: boulderingProject,
  address: {
    streetNumber: '2626',
    streetName: 'S Hardy Dr',
    city: 'Tempe',
    region: 'AZ',
    postalCode: '85282',
    country: 'US',
    latitude: 33.399,
    longitude: -111.957,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines'),
};
