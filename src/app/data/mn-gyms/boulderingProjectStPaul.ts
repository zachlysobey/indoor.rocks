import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectStPaul: ClimbingGym = {
  name: 'Bouldering Project St. Paul',
  website: 'https://boulderingproject.com/location/stpaul/',
  description: 'Bouldering only.',
  parent: boulderingProject,
  address: {
    streetNumber: '42',
    streetName: 'W Water St',
    city: 'St. Paul',
    region: 'MN',
    postalCode: '55107',
    country: 'US',
    latitude: 44.937,
    longitude: -93.088,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga', 'sauna'),
};
