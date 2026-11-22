import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { denverBoulderingClub } from "../companies/denverBoulderingClub";

export const denverBoulderingClubCentral: ClimbingGym = {
  name: 'Denver Bouldering Club Central',
  website: 'https://denverboulderingclub.com/',
  description: 'Bouldering only.',
  parent: denverBoulderingClub,
  address: {
    streetNumber: '2485',
    streetName: 'W 2nd Ave',
    city: 'Denver',
    state: 'CO',
    postalCode: '80223',
    country: 'USA',
    latitude: 39.720,
    longitude: -105.016,
  },
  amenities: amenities('bouldering'),
};
