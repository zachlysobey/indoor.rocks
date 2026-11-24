import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { denverBoulderingClub } from "../companies/denverBoulderingClub";

export const denverBoulderingClubNorth: ClimbingGym = {
  name: 'Denver Bouldering Club North',
  website: 'https://denverboulderingclub.com/',
  description: 'Bouldering only.',
  parent: denverBoulderingClub,
  address: {
    streetNumber: '698',
    streetName: 'W 84th Ave',
    city: 'Thornton',
    region: 'CO',
    postalCode: '80260',
    country: 'US',
    latitude: 39.851,
    longitude: -104.996,
  },
  amenities: amenities('bouldering'),
};
