import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { denverBoulderingClub } from "../companies/denverBoulderingClub";

export const denverBoulderingClubSouth: ClimbingGym = {
  name: 'Denver Bouldering Club South',
  website: 'https://denverboulderingclub.com/',
  description: 'Bouldering only.',
  parent: denverBoulderingClub,
  address: {
    streetNumber: '4131',
    streetName: 'S Natches Ct',
    city: 'Sheridan',
    region: 'CO',
    postalCode: '80110',
    country: 'US',
    latitude: 39.643,
    longitude: -105.010,
  },
  amenities: amenities('bouldering'),
};
