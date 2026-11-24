import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const confluenceClimbing: ClimbingGym = {
  name: 'Confluence Climbing',
  website: 'https://www.confluenceclimbing.com',
  description: 'Bouldering only, with a Grasshopper board.',
  address: {
    streetNumber: '819',
    streetName: '9th St N',
    city: 'Golden',
    region: 'BC',
    postalCode: 'V0A 1H2',
    country: 'CA',
    latitude: 51.304,
    longitude: -116.973,
  },
  amenities: amenities('bouldering', 'free-weights'),
};
