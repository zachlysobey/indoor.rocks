import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectMinneapolis: ClimbingGym = {
  name: 'Bouldering Project Minneapolis',
  website: 'https://boulderingproject.com/location/minneapolis/',
  description: 'Bouldering only.',
  parent: boulderingProject,
  address: {
    streetNumber: '1433',
    streetName: 'W River Rd N',
    city: 'Minneapolis',
    region: 'MN',
    postalCode: '55411',
    country: 'US',
    latitude: 44.993,
    longitude: -93.278,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga', 'sauna'),
};
