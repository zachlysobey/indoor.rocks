import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const confluenceClimbing: ClimbingGym = {
  name: 'Confluence Climbing',
  website: 'https://www.confluenceclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '819',
    streetName: '9th St N',
    city: 'Golden',
    state: 'BC',
    postalCode: 'V0A 1H2',
    country: 'Canada',
    latitude: 51.304,
    longitude: -116.973,
  },
  amenities: amenities('bouldering'),
};
