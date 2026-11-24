import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectEckington: ClimbingGym = {
  name: 'Bouldering Project Eckington',
  website: 'https://boulderingproject.com/location/eckington',
  description: 'Bouldering only.',
  parent: boulderingProject,
  address: {
    streetNumber: '1611',
    streetName: 'Eckington Pl NE',
    city: 'Washington',
    region: 'DC',
    postalCode: '20002',
    country: 'US',
    latitude: 38.914,
    longitude: -77.004,
  },
  amenities: amenities('bouldering', 'yoga'),
};
